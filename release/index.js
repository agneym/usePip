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
    c = n[1],
    i = e.useState(null),
    a = i[0],
    o = i[1];
  return (
    e.useEffect(
      function e() {
        var t = r.current;
        if (t) {
          if (!document.pictureInPictureEnabled || t.disablePictureInPicture)
            return o("NotSupportedError"), void c(!1);
          0 === t.readyState &&
            (t.addEventListener("loadedmetadata", e),
            t.addEventListener("emptied", e)),
            c(!1);
        }
      },
      [r]
    ),
    { error: a, loading: u, toggle: t(r, o) }
  );
};
//# sourceMappingURL=index.js.map
