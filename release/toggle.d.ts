import { RefObject } from "react";
declare function toggle(
  videoRef: RefObject<HTMLVideoElement>
): () => Promise<void>;
export default toggle;
