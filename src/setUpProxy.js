const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      createProxyMiddleware(["/graphql"], { target: "https://moments-backend-yanchen.herokuapp.com/graphql" })
    );
};

