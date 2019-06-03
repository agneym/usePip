import { useState, useEffect, Ref } from "react";

function usePip(videoRef: Ref<HTMLVideoElement>) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!("pictureInPictureEnabled" in document)) {
      setError("Feature is not available");
      setLoading(false);
      return;
    }
    if (videoRef) {
    }
  }, [videoRef]);
  return {
    error,
    loading,
  };
}

export default usePip;
