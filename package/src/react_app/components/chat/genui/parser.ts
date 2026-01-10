/**
 * GenUI Parser
 * 
 * Parses the Thesys LLM response format and extracts the component JSON.
 * Handles HTML entity decoding and content extraction.
 */

export interface GenUIComponent {
  component: string;
  props: Record<string, unknown>;
}

export interface GenUIResponse {
  component: GenUIComponent;
  error: string | null;
}

/**
 * Decode HTML entities in a string
 */
function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    '&quot;': '"',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&nbsp;': ' ',
  };

  return text.replace(/&(?:quot|amp|lt|gt|apos|#39|nbsp);/g, (match) => entities[match] || match);
}

/**
 * Extract JSON content from Thesys response wrapper
 * Handles: <content thesys="true">{ ... }</content>
 */
export function parseGenUIResponse(content: string): GenUIResponse | null {
  try {
    // Check if content contains thesys wrapper
    const thesysMatch = content.match(/<content\s+thesys="true">([\s\S]*?)<\/content>/);
    
    if (thesysMatch) {
      const jsonString = decodeHtmlEntities(thesysMatch[1].trim());
      const parsed = JSON.parse(jsonString) as GenUIResponse;
      return parsed;
    }

    // Try parsing as raw JSON (for testing or alternative formats)
    if (content.trim().startsWith('{')) {
      const parsed = JSON.parse(content) as GenUIResponse;
      if (parsed.component) {
        return parsed;
      }
    }

    return null;
  } catch (error) {
    console.error('Failed to parse GenUI response:', error);
    return null;
  }
}

/**
 * Check if content contains GenUI components
 */
export function isGenUIContent(content: string): boolean {
  return content.includes('<content thesys="true">') || 
         (content.trim().startsWith('{') && content.includes('"component"'));
}

/**
 * Extract plain text from content (before any GenUI tags)
 */
export function extractPlainText(content: string): string {
  const thesysIndex = content.indexOf('<content thesys="true">');
  if (thesysIndex > 0) {
    return content.substring(0, thesysIndex).trim();
  }
  return '';
}

