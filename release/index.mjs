import { useState as t, useEffect as r } from "react";
function e(t, r) {
  return function() {
    document.pictureInPictureElement
      ? document.exitPictureInPicture().catch(function(t) {
          r(t);
        })
      : t.current.requestPictureInPicture().catch(function(t) {
          r(t);
        });
  };
}
export default function(n) {
  var u = t(!0),
    c = u[0],
    i = u[1],
    o = t(null),
    d = o[0],
    f = o[1];
  return (
    r(
      function() {
        if (n.current)
          return !document.pictureInPictureEnabled ||
            n.current.disablePictureInPicture
            ? (f("NotSupportedError"), void i(!1))
            : void i(!1);
      },
      [n]
    ),
    { error: d, loading: c, toggle: e(n, f) }
  );
}
//# sourceMappingURL=index.mjs.map
