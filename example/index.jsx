import React, { useRef } from "react";
import ReactDOM from "react-dom";

import video from "./big-buck-bunny.mp4";
import usePip from "../src";

function App() {
  const videoRef = useRef(null);

  const { loading, error, toggle } = usePip(videoRef);
  return (
    <main className="App">
      <sub>
        Credits: Media files are © Blender Foundation | www.blender.org.
      </sub>
      <video controls ref={videoRef}>
        <source src={video} type="video/mp4" />
      </video>
      {!loading && error !== "NotSupportedError" && (
        <button onClick={toggle} disabled={loading} className="pip-button">
          Toggle Picture in Picture
        </button>
      )}
      {error === "NotSupportedError" && (
        <p>Your browser does not support this feature :(</p>
      )}
      {error && <p>Could not trigger Picture in Picture :(</p>}
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
