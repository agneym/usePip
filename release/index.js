var e = require("react");
module.exports = function(r) {
  var t = e.useState(!0),
    u = t[0],
    n = t[1],
    o = e.useState(null),
    i = o[0],
    c = o[1];
  return (
    e.useEffect(
      function() {
        if (r.current)
          return !document.pictureInPictureEnabled ||
            r.current.disablePictureInPicture
            ? (c("NotSupportedError"), void n(!1))
            : void 0;
      },
      [r]
    ),
    { error: i, loading: u, toggle: function() {} }
  );
};
//# sourceMappingURL=index.js.map
