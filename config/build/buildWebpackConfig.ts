import { Configuration } from 'webpack';
import { BuildOptions }  from './types/config';
import build             from './';

export default function (options: BuildOptions): Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[fullhash].js',
            assetModuleFilename: '[name].[fullhash].[ext][query]',
            clean: true,
        },
        plugins: build.plugins(paths),
        module: {
            rules: build.loaders(options),
        },
        resolve: build.resolvers(options),
        devServer: isDev ? build.devServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
    };
}
