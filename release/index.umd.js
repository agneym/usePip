!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], t)
    : (e.usePip = t(e.react));
})(this, function(e) {
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
  return function(n) {
    var r = e.useState(!0),
      u = r[0],
      c = r[1],
      i = e.useState(null),
      o = i[0],
      f = i[1];
    return (
      e.useEffect(
        function() {
          if (n.current)
            return !document.pictureInPictureEnabled ||
              n.current.disablePictureInPicture
              ? (f("NotSupportedError"), void c(!1))
              : void c(!1);
        },
        [n]
      ),
      { error: o, loading: u, toggle: t(n, f) }
    );
  };
});
//# sourceMappingURL=index.umd.js.map
