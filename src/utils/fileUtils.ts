/**
 * Utility functions for handling file uploads and conversions
 */

export interface FileAttachment {
  file: File;
  type: "image" | "document" | "audio";
  base64?: string;
  url?: string;
}

/**
 * Convert a file to base64 string
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Remove data URL prefix (e.g., "data:image/png;base64,")
      const base64 = base64String.split(",")[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Determine file type from MIME type
 */
export const getFileType = (mimeType: string): "image" | "document" | "audio" => {
  if (mimeType.startsWith("image/")) {
    return "image";
  } else if (mimeType.startsWith("audio/")) {
    return "audio";
  } else {
    return "document";
  }
};

/**
 * Convert file to OpenAI message content format
 * For images: { type: "image_url", image_url: { url: "data:image/..." } }
 * For other files: Convert to base64 and include as text or upload to service
 */
export const fileToMessageContent = async (
  file: File
): Promise<{ type: string; [key: string]: string | object }> => {
  const fileType = getFileType(file.type);

  if (fileType === "image") {
    // For images, use data URL format
    const base64 = await fileToBase64(file);
    const dataUrl = `data:${file.type};base64,${base64}`;
    return {
      type: "image_url",
      image_url: {
        url: dataUrl,
      },
    };
  } else {
    // For documents and audio, convert to base64
    // Note: For production, you might want to upload to a file service
    // and include the URL instead of base64
    const base64 = await fileToBase64(file);
    const dataUrl = `data:${file.type};base64,${base64}`;
    
    // Return as text with file metadata
    return {
      type: "text",
      text: `[File: ${file.name} (${file.type}, ${(file.size / 1024).toFixed(2)}KB)]\nData URL: ${dataUrl}`,
    };
  }
};

/**
 * Convert multiple files to message content array
 */
export const filesToMessageContent = async (
  files: File[]
): Promise<Array<{ type: string; [key: string]: string | object }>> => {
  const contents = await Promise.all(files.map(fileToMessageContent));
  
  // Combine all contents into a single array
  return contents;
};
