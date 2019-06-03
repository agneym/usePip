import { useState, useEffect, RefObject } from "react";

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
  }, [videoRef]);

  return {
    error,
    loading,
  };
}

export default usePip;
