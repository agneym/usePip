import { useState as r, useEffect as e } from "react";
export default function(n) {
  var t = r(!0),
    i = t[0],
    o = t[1],
    u = r(null),
    a = u[0],
    l = u[1];
  return (
    e(
      function() {
        if (!("pictureInPictureEnabled" in document))
          return l("Feature is not available"), void o(!1);
      },
      [n]
    ),
    { error: a, loading: i }
  );
}
//# sourceMappingURL=index.mjs.map
