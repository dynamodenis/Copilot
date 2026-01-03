/**
 * Types for Tavily Search API responses
 * Tavily is the recommended search tool for Thesys C1 integration
 */

// Tavily search result item
export interface TavilySearchResult {
  title: string;
  url: string;
  content: string;
  score: number;
  raw_content?: string;
}

// Tavily search response
export interface TavilySearchResponse {
  query: string;
  answer?: string;
  results: TavilySearchResult[];
  images?: string[];
  response_time: number;
}

// Transformed result for consistent usage
export interface TransformedWebResult {
  title: string;
  sourceURL: string;
  snippet: string;
  score: number;
}
