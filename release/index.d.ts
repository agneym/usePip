import { RefObject } from "react";
/**
 * React custom hook to use Picture-in-Picture functionality
 * @param videoRef Reference to the video element
 *
 * @example
 * const { loading, error, toggle } = usePip(videoRef);
 */
declare function usePip(
  videoRef: RefObject<HTMLVideoElement>
): {
  error: string | null;
  loading: boolean;
  toggle: () => void;
};
export default usePip;
