import React, { useRef } from "react";
import ReactDOM from "react-dom";

import video from "./big-buck-bunny.mp4";
import usePip from "../src";

function App() {
  const videoRef = useRef(null);

  const { loading, error, toggle } = usePip(videoRef);
  return (
    <main className="App">
      <video controls ref={videoRef}>
        <source src={video} type="video/mp4" />
      </video>
      {!loading && error !== "NotSupportedError" && (
        <button onClick={toggle} disabled={loading} className="pip-button">
          Toggle Picture in Picture
        </button>
      )}
      {error && <p>Could not trigger Picture in Picture :(</p>}
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
