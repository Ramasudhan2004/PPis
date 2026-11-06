export type ImageSize =
  | "square_hd"
  | "square"
  | "portrait_4_3"
  | "portrait_16_9"
  | "landscape_4_3"
  | "landscape_16_9";

/**
 * Builds a URL for the on-demand image service used for editorial photography.
 * Replace with the client's real photography by swapping the value in the
 * content files (single point of truth).
 */
export function img(prompt: string, size: ImageSize = "landscape_4_3"): string {
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt,
  )}&image_size=${size}`;
}
