import webpack                  from 'webpack';
import path                     from 'path';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import buildWebpackConfig       from './config/build/buildWebpackConfig';


export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        src:    path.resolve(__dirname, 'src'),
        entry:  path.resolve(__dirname, 'src', 'index.tsx'),
        styles: path.resolve(__dirname, 'src/app/styles', 'index.scss'),
        html:   path.resolve(__dirname, 'public', 'index.html'),
        build:  path.resolve(__dirname, 'build'),
    };

    const mode =  env.mode || 'development';
    const port =  env.port || 3000;
    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        isDev,
        paths,
        port,
    });
};
