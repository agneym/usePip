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
  var u = e.useState(!0),
    n = u[0],
    c = u[1],
    i = e.useState(null),
    o = i[0],
    a = i[1];
  return (
    e.useEffect(
      function() {
        if (r.current)
          return !document.pictureInPictureEnabled ||
            r.current.disablePictureInPicture
            ? (a("NotSupportedError"), void c(!1))
            : void c(!1);
      },
      [r]
    ),
    { error: o, loading: n, toggle: t(r, a) }
  );
};
//# sourceMappingURL=index.js.map
