module.exports = {
    publicPath: './',
    devServer: {
        host: '0.0.0.0',
        proxy: {
            "/api": {
                target: 'http://104.168.14.87:5000',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        },
    }
};