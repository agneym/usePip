!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], t)
    : (e.usePip = t(e.react));
})(this, function(e) {
  return function(t) {
    var r = e.useState(!0),
      n = r[0],
      u = r[1],
      o = e.useState(null),
      i = o[0],
      c = o[1];
    return (
      e.useEffect(
        function() {
          if (t.current)
            return !document.pictureInPictureEnabled ||
              t.current.disablePictureInPicture
              ? (c("NotSupportedError"), void u(!1))
              : void 0;
        },
        [t]
      ),
      { error: i, loading: n, toggle: function() {} }
    );
  };
});
//# sourceMappingURL=index.umd.js.map
