module.exports = {
  DEV: {
    '/salesplus': {
      target: 'http://localhost:19000', // 代理接口
      changeOrigin: true,
      pathRewrite: {'^/salesplus': '/salesplus'},
    },
  },
};
