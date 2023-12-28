import HtmlWebpackPlugin                         from 'html-webpack-plugin';
import MiniCssExtractPlugin                      from 'mini-css-extract-plugin';
import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import { BuildPaths }                            from './types/config';

export default function (paths: BuildPaths): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ];
}
