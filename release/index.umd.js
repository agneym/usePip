!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], t)
    : (e.usePip = t(e.react));
})(this, function(e) {
  return function(t) {
    var n = e.useState(!0)[0],
      u = e.useState(null),
      i = u[0],
      o = u[1];
    return (
      e.useEffect(
        function() {
          "pictureInPictureEnabled" in document || o("Not Available");
        },
        [t]
      ),
      { error: i, loading: n }
    );
  };
});
//# sourceMappingURL=index.umd.js.map
