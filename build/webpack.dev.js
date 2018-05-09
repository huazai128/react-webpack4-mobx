import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import ConfigWebpack from './webpack.config'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const webpackDev = merge(ConfigWebpack,{
	mode:'development', 
	output:{
		filename: 'core/[name].[hash:5].js',
		path:path.join(__dirname,'dist/'),
		chunkFilename: 'core/[name].[chunkhash:5].js',
		publicPath:'/'
	},
	target:'web',
	devtool:'cheap-module-eval-source-map',
	devServer: {
		clientLogLevel: 'warning',
		hot: true,
		inline: true,
		open: true,
		historyApiFallback: true,
		compress: true, // 开启gzip
		port: 3000
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(), //  热加
		new HtmlWebpackPlugin({
			title:'webpack4+react+typescript',
			filename:'index.html',
			template: 'src/html/index.html',
			// 资源插入位置，true：插入body
			inject:true
		}),
	]
})
export default webpackDev