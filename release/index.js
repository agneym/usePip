var e = require("react");
module.exports = function(r) {
  var t = e.useState(!0),
    u = t[0],
    n = t[1],
    a = e.useState(null),
    i = a[0],
    o = a[1];
  return (
    e.useEffect(
      function() {
        if (!("pictureInPictureEnabled" in document))
          return o("Feature is not available"), void n(!1);
      },
      [r]
    ),
    { error: i, loading: u }
  );
};
//# sourceMappingURL=index.js.map
