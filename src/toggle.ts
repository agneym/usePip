import { RefObject } from "react";

function toggle(videoRef: RefObject<HTMLVideoElement>) {
  return function() {
    // If there is no element in Picture-in-Picture yet, let’s request
    // Picture-in-Picture for the video, otherwise leave it.
    if (!document.pictureInPictureElement) {
      videoRef.current!.requestPictureInPicture().catch(error => {
        // Video failed to enter Picture-in-Picture mode.
      });
    } else {
      document.exitPictureInPicture().catch(error => {
        // Video failed to leave Picture-in-Picture mode.
      });
    }
  };
}

export default toggle;
