var e = require("react");
function t(e, t) {
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
module.exports = function(r) {
  var n = e.useState(!0),
    u = n[0],
    i = n[1],
    c = e.useState(null),
    o = c[0],
    d = c[1];
  return (
    e.useEffect(
      function e() {
        var t = r.current;
        if (t)
          return !document.pictureInPictureEnabled || t.disablePictureInPicture
            ? (d("NotSupportedError"), void i(!1))
            : 0 === t.readyState
            ? (t.addEventListener("loadedmetadata", e),
              void t.addEventListener("emptied", e))
            : (i(!1),
              function() {
                t.removeEventListener("loadeddata", e),
                  t.removeEventListener("emptied", e);
              });
      },
      [r]
    ),
    { error: o, loading: u, toggle: t(r, d) }
  );
};
//# sourceMappingURL=index.js.map
