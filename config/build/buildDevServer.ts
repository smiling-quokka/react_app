import type {
    Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions }                     from './types/config';

export default function (options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
    };
}
