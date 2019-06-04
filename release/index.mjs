import { useState as e, useEffect as t } from "react";
function r(e, t) {
  return function() {
    document.pictureInPictureElement
      ? document.exitPictureInPicture().catch(function(e) {
          t(e);
        })
      : e.current.requestPictureInPicture().catch(function(e) {
          t(e);
        });
  };
}
export default function(n) {
  var i = e(!0),
    u = i[0],
    c = i[1],
    o = e(null),
    d = o[0],
    a = o[1];
  return (
    t(
      function e() {
        var t = n.current;
        if (t)
          return !document.pictureInPictureEnabled || t.disablePictureInPicture
            ? (a("NotSupportedError"), void c(!1))
            : 0 === t.readyState
            ? (t.addEventListener("loadedmetadata", e),
              void t.addEventListener("emptied", e))
            : (c(!1),
              function() {
                t.removeEventListener("loadeddata", e),
                  t.removeEventListener("emptied", e);
              });
      },
      [n]
    ),
    { error: d, loading: u, toggle: r(n, a) }
  );
}
//# sourceMappingURL=index.mjs.map
