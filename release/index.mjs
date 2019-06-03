import { useState as r, useEffect as n } from "react";
export default function(t) {
  var e = r(!0)[0],
    o = r(null),
    i = o[0],
    u = o[1];
  return (
    n(
      function() {
        "pictureInPictureEnabled" in document || u("Not Available");
      },
      [t]
    ),
    { error: i, loading: e }
  );
}
//# sourceMappingURL=index.mjs.map
