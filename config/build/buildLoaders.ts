import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule }      from 'webpack';
import { BuildOptions }     from './types/config';

export default function ({ isDev, paths }: BuildOptions): RuleSetRule[] {
    const css = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module'),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: [paths.styles],
                },
            },
        ],
    };

    const typescript = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgr = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const file = {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        },
    };

    return [typescript, css, svgr, file];
}
