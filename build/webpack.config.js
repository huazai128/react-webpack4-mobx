import path from 'path'
import autoprefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
const isProduction = process.argv.indexOf('-p') >= 0
import config from '../config'

const arr = [

]
const ConfigWebpack = {
	entry: {
		vendor: [
			'babel-polyfill',
			// 'react',
			// 'react-dom',
		],
		main: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://0.0.0.0:' + config.port,
			'webpack/hot/only-dev-server',
			path.join(__dirname, '../src/main.tsx')
		],
	},
	resolve: {
		extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.react.js'],
		alias: {
			'app': path.join(__dirname, '../src/app/'),
			'assets': path.join(__dirname, '../src/assets/')
		}
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.(tsx|ts)?$/,
				use: ['babel-loader', 'ts-loader'],
			}, {
				test: /\.js|\.jsx$/,
				use: {
					loader: 'babel-loader',
				},
				exclude: /node_modules/,
			},
			{
				test: /\.(eot|woff|woff2|ttf|png|jpe?g|jpg|gif|mp4|webm)(\?\S*)?$/,
				loader: 'file-loader',
				options: {
					name: '[name:hash:6].[ext]',
					publicPath: 'img/'
				},
				include: path.join(__dirname, 'src'),
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|sass|css)$/,
				use: [
					!isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}, {
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: [
								// autoprefixer, pxtorem({
								// 	rootValue: 100,
								// 	minPixelValue: 3,
								// 	propWhiteList: [],
								// })
								autoprefixer
							]
						},
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						}
					}]
			}, {
				test: /\.(svg)$/i,
				loader: 'svg-sprite-loader',
				include: [require.resolve('antd').replace(/warn\.js$/, '')],
			},
			{
				test: /\.(less)$/,
				use: [
					!isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							plugins: [
								// autoprefixer, pxtorem({
								// 	rootValue: 100,
								// 	minPixelValue: 3,
								// 	propWhiteList: [],
								// })
								autoprefixer
							]
						},
					},
					{
						loader: 'less-loader',
						options: { javascriptEnabled: true }
					},
				],
			},
		]
	},
	optimization: {
		splitChunks: {
			name: true,
			cacheGroups: {
				commons: {
					chunks: 'initial',
					minChunks: 2
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					priority: -10
				}
			}
		},
		runtimeChunk: true
	},
	plugins: [
		new MiniCssExtractPlugin({ //  抽离css
			filename: 'css/[name].[contenthash].css',
			allChunks: true,
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				API: JSON.stringify(config.apiBase)
			}
		}),
	]
}

export default ConfigWebpack
