!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], t)
    : (e.usePip = t(e.react));
})(this, function(e) {
  return function(t) {
    var n = e.useState(!0),
      u = n[0],
      i = n[1],
      r = e.useState(null),
      o = r[0],
      f = r[1];
    return (
      e.useEffect(
        function() {
          if (!("pictureInPictureEnabled" in document))
            return f("Feature is not available"), void i(!1);
        },
        [t]
      ),
      { error: o, loading: u }
    );
  };
});
//# sourceMappingURL=index.umd.js.map
