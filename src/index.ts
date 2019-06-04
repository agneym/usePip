import { useState, useEffect, RefObject } from "react";

import toggle from "./toggle";

function usePip(videoRef: RefObject<HTMLVideoElement>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    if (
      !document.pictureInPictureEnabled ||
      videoRef.current.disablePictureInPicture
    ) {
      setError("NotSupportedError");
      setLoading(false);
      return;
    }
    setLoading(false);
  }, [videoRef]);

  return {
    error,
    loading,
    toggle: toggle(videoRef, setError),
  };
}

export default usePip;
