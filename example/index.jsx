import React, { useRef } from "react";
import ReactDOM from "react-dom";

import video from "./big-buck-bunny.mp4";

function App() {
  const videoRef = useRef(null);

  return (
    <main>
      <video controls ref={videoRef}>
        <source src={video} type="video/mp4" />
      </video>
      <button>Toggle Picture in Picture</button>
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
