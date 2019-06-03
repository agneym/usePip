import { Ref } from "react";
declare function usePip(
  videoRef: Ref<HTMLVideoElement>
): {
  error: string | null;
  loading: boolean;
};
export default usePip;
