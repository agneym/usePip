import { RefObject } from "react";
declare function toggle(
  videoRef: RefObject<HTMLVideoElement>,
  setError: (err: string | null) => void
): () => void;
export default toggle;
