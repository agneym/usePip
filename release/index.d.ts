import { RefObject } from "react";
declare function usePip(
  videoRef: RefObject<HTMLVideoElement>
): {
  error: string | null;
  loading: boolean;
  toggle: () => Promise<void>;
};
export default usePip;
