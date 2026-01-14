/**
 * Incremental JSON Parser for GenUI
 * 
 * This parser extracts complete component definitions from streaming JSON
 * as soon as they become available, enabling progressive rendering.
 * 
 * Strategy:
 * 1. Track JSON structure depth and extract complete objects
 * 2. Parse component definitions as soon as we have component name + props
 * 3. Handle nested structures incrementally
 */

export interface ParsedComponent {
  component: string;
  props: Record<string, unknown>;
  isComplete: boolean; // Whether this component has all its data
}

/**
 * Extract component definitions from incomplete JSON
 * This is much more aggressive - it tries to extract components as soon as
 * we have enough data, even if the JSON is incomplete
 */
export function extractComponentsIncrementally(jsonString: string): ParsedComponent[] {
  const components: ParsedComponent[] = [];
  
  // Decode HTML entities first
  let decoded = jsonString
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
  
  // Strategy 1: Try to find complete component definitions
  // Look for patterns like: "component": "Card" followed by "props": {...}
  const componentPattern = /"component"\s*:\s*"([^"]+)"\s*,\s*"props"\s*:\s*\{([^}]*)\}/g;
  let match;
  
  while ((match = componentPattern.exec(decoded)) !== null) {
    const componentName = match[1];
    const propsStr = match[2];
    
    // Skip if component name is missing
    if (!componentName) {
      continue;
    }
    
    // Try to parse props
    let props: Record<string, unknown> = {};
    try {
      // If props string is not empty, try to parse it
      if (propsStr && propsStr.trim()) {
        // Check if props string looks complete (has closing brace or is at end)
        const propsMatch = decoded.substring(match.index).match(/"props"\s*:\s*\{([\s\S]*?)(\}|$)/);
        if (propsMatch) {
          try {
            props = JSON.parse(`{${propsMatch[1]}}`);
          } catch (e) {
            // Props incomplete, use empty object
          }
        }
      }
    } catch (e) {
      // Props parsing failed, use empty object
    }
    
    components.push({
      component: componentName,
      props,
      isComplete: propsStr ? (propsStr.includes('}') || decoded.indexOf('</content>', match.index) !== -1) : false,
    });
  }
  
  // Strategy 2: If no complete matches, extract just component names
  // This allows us to render skeleton components immediately
  if (components.length === 0) {
    const namePattern = /"component"\s*:\s*"([^"]+)"/g;
    while ((match = namePattern.exec(decoded)) !== null) {
      // Check if this is the inner component (not the wrapper)
      const beforeMatch = decoded.substring(0, match.index);
      const depth = (beforeMatch.match(/\{/g) || []).length - (beforeMatch.match(/\}/g) || []).length;
      
      // If depth is 2 or more, this is likely an inner component
      if (depth >= 2 && match[1]) {
        components.push({
          component: match[1],
          props: {},
          isComplete: false,
        });
      }
    }
  }
  
  return components;
}

/**
 * Parse streaming GenUI content with aggressive incremental extraction
 */
export function parseStreamingGenUIAggressive(content: string): {
  rootComponent: ParsedComponent | null;
  childComponents: ParsedComponent[];
} {
  try {
    // Extract JSON from Thesys wrapper
    const thesysIndex = content.indexOf('<content thesys="true">');
    if (thesysIndex === -1) {
      return { rootComponent: null, childComponents: [] };
    }
    
    const afterTag = content.substring(thesysIndex + '<content thesys="true">'.length);
    const closingTagIndex = afterTag.indexOf('</content>');
    const jsonString = closingTagIndex !== -1 
      ? afterTag.substring(0, closingTagIndex).trim()
      : afterTag.trim();
    
    if (!jsonString) {
      return { rootComponent: null, childComponents: [] };
    }
    
    // Try to parse complete JSON first
    try {
      const parsed = JSON.parse(jsonString) as { component: { component: string; props: Record<string, unknown> }; error: null };
      if (parsed.component) {
        return {
          rootComponent: {
            component: parsed.component.component,
            props: parsed.component.props || {},
            isComplete: true,
          },
          childComponents: [],
        };
      }
    } catch (e) {
      // JSON incomplete, use incremental extraction
    }
    
    // Extract components incrementally
    const components = extractComponentsIncrementally(jsonString);
    
    if (components.length === 0) {
      return { rootComponent: null, childComponents: [] };
    }
    
    // The first component is usually the root (Card, etc.)
    const rootComponent = components[0] || null;
    const childComponents = components.slice(1);
    
    return { rootComponent, childComponents };
  } catch (error) {
    return { rootComponent: null, childComponents: [] };
  }
}

