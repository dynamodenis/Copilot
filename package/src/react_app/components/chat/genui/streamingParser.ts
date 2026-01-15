/**
 * Streaming GenUI Parser
 * 
 * Parses GenUI JSON incrementally as it streams in, allowing progressive rendering.
 * Handles Thesys format: <content thesys="true">{ "component": { "component": "Card", ... }, "error": null }</content>
 */

export interface StreamingGenUIComponent {
  component: {
    component: string;
    props: Record<string, unknown>;
  };
  error: string | null;
}

/**
 * Incremental parser that extracts JSON objects from streaming content
 * Handles Thesys format: <content thesys="true">{ "component": { "component": "Card", ... }, "error": null }</content>
 * Tries to parse complete JSON, and if incomplete, extracts partial structures for progressive rendering
 */
export function parseStreamingGenUI(content: string): StreamingGenUIComponent | null {
  try {
    // Look for <content thesys="true"> wrapper (may be incomplete during streaming)
    // Match everything after the opening tag until closing tag or end of string
    const thesysIndex = content.indexOf('<content thesys="true">');
    
    if (thesysIndex === -1) {
      // No thesys tag found, try raw JSON
      return tryParseRawJSON(content);
    }
    
    // Extract everything after the opening tag
    const afterTag = content.substring(thesysIndex + '<content thesys="true">'.length);
    
    // Find the closing tag if it exists, otherwise use everything
    const closingTagIndex = afterTag.indexOf('</content>');
    let jsonString = closingTagIndex !== -1 
      ? afterTag.substring(0, closingTagIndex).trim()
      : afterTag.trim();
    
    // Debug logs removed for production
      
      // Decode HTML entities
      jsonString = jsonString
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#39;/g, "'")
        .replace(/&apos;/g, "'");
      
      // Try to parse complete JSON first
      try {
        const parsed = JSON.parse(jsonString) as StreamingGenUIComponent;
        if (parsed.component) {
          return parsed;
        }
      } catch (error) {
        // JSON is incomplete - use aggressive incremental extraction
        // Extract component name immediately, even if props are incomplete
        return extractComponentIncrementally(jsonString);
      }
    
    // Try parsing as raw JSON (for testing or alternative formats)
    return tryParseRawJSON(content);
  } catch (error) {
    console.error('parseStreamingGenUI - Error:', error);
    return null;
  }
}

/**
 * Aggressively extract component from incomplete JSON
 * This is the key to fast rendering - extract as soon as we have component name
 */
function extractComponentIncrementally(jsonString: string): StreamingGenUIComponent | null {
  // Strategy 1: Find the innermost component (the actual UI component, not the wrapper)
  // Look for pattern: "component": "Card" that appears after at least one opening brace
  // This helps us find the actual component, not the wrapper
  
  // Find all component name matches - we want the innermost one (the actual UI component)
  let lastComponentMatch: RegExpMatchArray | null = null;
  let lastComponentIndex = -1;
  let maxDepth = -1;
  
  // Find all component name matches
  const componentNamePattern = /"component"\s*:\s*"([^"]+)"/g;
  let match;
  
  while ((match = componentNamePattern.exec(jsonString)) !== null) {
    const beforeMatch = jsonString.substring(0, match.index);
    const currentDepth = (beforeMatch.match(/\{/g) || []).length - (beforeMatch.match(/\}/g) || []).length;
    
    // Track the deepest/most nested component (usually the actual UI component)
    // Depth >= 1 means it's inside at least one object (the wrapper)
    if (currentDepth >= 1 && currentDepth > maxDepth) {
      lastComponentMatch = match;
      lastComponentIndex = match.index;
      maxDepth = currentDepth;
    }
  }
  
  if (lastComponentMatch && lastComponentMatch[1]) {
    const componentName = lastComponentMatch[1];
    
    // Strategy 2: Try to extract props that come after this component name
    // Look for "props": { ... } that appears after the component name
    const afterComponent = jsonString.substring(lastComponentIndex + lastComponentMatch[0].length);
    const propsMatch = afterComponent.match(/"props"\s*:\s*\{([\s\S]*?)(\}|$)/);
    
    let props: Record<string, unknown> = {};
    
    if (propsMatch && propsMatch[1]) {
      // Try to extract what we can from props
      // Look for simple key-value pairs that are complete
      const propsStr = propsMatch[1];
      
      // Extract complete key-value pairs (simple values only for now)
      const simplePropsPattern = /"([^"]+)"\s*:\s*"([^"]*)"|"([^"]+)"\s*:\s*(\d+|true|false|null)/g;
      let propMatch;
      while ((propMatch = simplePropsPattern.exec(propsStr)) !== null) {
        const key = propMatch[1] || propMatch[3];
        const value = propMatch[2] || propMatch[4];
        if (key) {
          props[key] = value === 'true' ? true : value === 'false' ? false : value === 'null' ? null : value;
        }
      }
      
      // Try to extract children array if it exists (even if incomplete)
      if (propsStr.includes('"children"') && propsStr.includes('[')) {
        // For now, just mark that children exist - we'll extract them as they stream in
        props.children = []; // Empty array, will be populated as more data arrives
      }
    }
    
    // Return immediately with whatever we have
    return {
      component: {
        component: componentName,
        props: props,
      },
      error: null,
    };
  }
  
  return null;
}

/**
 * Try to parse raw JSON content
 */
function tryParseRawJSON(content: string): StreamingGenUIComponent | null {
  if (content.trim().startsWith('{')) {
    try {
      const parsed = JSON.parse(content) as StreamingGenUIComponent;
      if (parsed.component) {
        return parsed;
      }
    } catch (error) {
      // Incomplete JSON - try to extract component name at least
      const nameMatch = content.match(/"component"\s*:\s*"([^"]+)"/);
      if (nameMatch && nameMatch[1]) {
        return {
          component: {
            component: nameMatch[1],
            props: {},
          },
          error: null,
        };
      }
      return null;
    }
  }
  
  return null;
}

