const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      createProxyMiddleware(["/"], { target: "https://moments-backend-yanchen.herokuapp.com" })
    );
};

