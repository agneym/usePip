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
      i = r[1],
      c = e.useState(null),
      o = c[0],
      d = c[1];
    return (
      e.useEffect(
        function e() {
          var t = n.current;
          if (t) {
            if (!document.pictureInPictureEnabled || t.disablePictureInPicture)
              return d("NotSupportedError"), void i(!1);
            0 === t.readyState &&
              (t.addEventListener("loadedmetadata", e),
              t.addEventListener("emptied", e)),
              i(!1);
          }
        },
        [n]
      ),
      { error: o, loading: u, toggle: t(n, d) }
    );
  };
});
//# sourceMappingURL=index.umd.js.map
