const webpack = require("webpack")
	
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
	plugins: [
	  new webpack.ProvidePlugin({
		  process: 'process/browser',
	  }),
	],
   resolve: {
      fallback: {
          os: require.resolve("os-browserify/browser"),
          path: require.resolve("path-browserify"),
		  fs: require.resolve("file-system"),
		  util: require.resolve("util"),
      },
    },
  })
}
