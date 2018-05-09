import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import ConfigWebpack from './webpack.config'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSPlugin from 'optimize-css-assets-webpack-plugin' // 抽离css
import CompressionPlugin from 'compression-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import CopyWebpackPlugin from 'copy-webpack-plugin'
const isProduction = process.argv.indexOf('-p') >= 0

const webpackProd = merge(ConfigWebpack,{
	mode:'production',
	output:{
		filename: 'core/[name].[chunkhash].js',
		path:path.resolve('dist/'),
		chunkFilename: 'core/[name].[chunkhash].js',
		publicPath:'./'
	},
	devtool: 'source-map',
	plugins:[
		new CleanWebpackPlugin('./dist'), //清除 dist目录
		new BundleAnalyzerPlugin(),
		new CopyWebpackPlugin([{ // 复制指定文件
			from: path.join(__dirname, '../src/assets/js/lib'),
			to: path.join(__dirname, '../dist/lib')
		}]),
		new HtmlWebpackPlugin({
			title:'webpack4+react+typescript',
			filename:'index.html',
			template: 'src/html/index.html',
			// 资源插入位置，true：插入body
			inject:true,
			minify:{
				removeComments:true, // 删除注解
				collapseWhitespace:true, // 合并空格
				removeAttributeQuotes: true,
			},
			chunksSortMode:'dependency', //根据依赖引入chunk
		}),
		new OptimizeCSSPlugin(), // 压缩css
		new webpack.HashedModuleIdsPlugin(), // 缓存优化
		new CompressionPlugin({ // 开启gzip
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.(js|html|css)$/,
			threshold: 10240,
			minRatio: 0.8,
		}),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), 
	]
})
export default webpackProd