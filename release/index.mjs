import { useState as t, useEffect as e } from "react";
function r(t, e) {
  return function() {
    document.pictureInPictureElement
      ? document.exitPictureInPicture().catch(function(t) {
          e(t);
        })
      : t.current.requestPictureInPicture().catch(function(t) {
          e(t);
        });
  };
}
export default function(n) {
  var u = t(!0),
    c = u[0],
    i = u[1],
    o = t(null),
    d = o[0],
    a = o[1];
  return (
    e(
      function t() {
        var e = n.current;
        if (e) {
          if (!document.pictureInPictureEnabled || e.disablePictureInPicture)
            return a("NotSupportedError"), void i(!1);
          0 === e.readyState &&
            (e.addEventListener("loadedmetadata", t),
            e.addEventListener("emptied", t)),
            i(!1);
        }
      },
      [n]
    ),
    { error: d, loading: c, toggle: r(n, a) }
  );
}
//# sourceMappingURL=index.mjs.map
