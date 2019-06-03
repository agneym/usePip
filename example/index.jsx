import React from "react";
import ReactDOM from "react-dom";

import video from "./big-buck-bunny.mp4";

function App() {
  return (
    <video controls>
      <source src={video} type="video/mp4" />
    </video>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
