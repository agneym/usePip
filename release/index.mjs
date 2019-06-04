import { useState as r, useEffect as t } from "react";
export default function(e) {
  var n = r(!0),
    o = n[0],
    u = n[1],
    i = r(null),
    c = i[0],
    d = i[1];
  return (
    t(
      function() {
        if (e.current)
          return !document.pictureInPictureEnabled ||
            e.current.disablePictureInPicture
            ? (d("NotSupportedError"), void u(!1))
            : void 0;
      },
      [e]
    ),
    { error: c, loading: o, toggle: function() {} }
  );
}
//# sourceMappingURL=index.mjs.map
