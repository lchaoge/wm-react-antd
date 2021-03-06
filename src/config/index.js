const proxy = require("http-proxy-middleware");
 
module.exports = (app)=>{
  app.use(
    proxy("/base/**", {
      target: "http://45.32.15.21:8090/",
      changeOrigin: true,
      pathRewrite: {
        "^/base": "/"
      }
    })
  );
  app.use(
    proxy("/fans/**", {
      target: "https://easy-mock.com/mock/5c0f31837214cf627b8d43f0/",
      changeOrigin: true,
      pathRewrite: {
        "^/fans": "/"
      }
    })
  );
};