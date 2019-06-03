var e = require("react");
module.exports = function(t) {
  var r = e.useState(!0)[0],
    u = e.useState(null),
    n = u[0],
    a = u[1];
  return (
    e.useEffect(
      function() {
        "pictureInPictureEnabled" in document || a("Not Available");
      },
      [t]
    ),
    { error: n, loading: r }
  );
};
//# sourceMappingURL=index.js.map
