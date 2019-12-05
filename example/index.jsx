import React, { useRef } from "react";
import ReactDOM from "react-dom";

import usePip from "../src";

function App() {
  const videoRef = useRef(null);

  const { loading, error, toggle } = usePip(videoRef);
  return (
    <main className="App">
      <sub>
        Credits: Media files are © Blender Foundation | www.blender.org.
      </sub>
      <video
        controls
        ref={videoRef}
        poster="http://media.w3.org/2010/05/bunny/poster.png"
      >
        <source
          src="http://media.w3.org/2010/05/bunny/movie.mp4"
          type="video/mp4"
        />
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
      <p>
        <span>Check </span>
        <a href="https://github.com/agneym/usePip#readme">
          Github page
        </a>
        <span> for usage</span>
      </p>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
