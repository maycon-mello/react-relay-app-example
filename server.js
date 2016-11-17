let app = require('../react-relay-app');

app.serve({
  port: 3000,
  rootPath: __dirname,
  staticsPath: 'public',
  publicPath: '/static/',
  entry: './index.js',
  schema: {
    entry: './src/data/schema',
    watch: './src/data'
  }
});
