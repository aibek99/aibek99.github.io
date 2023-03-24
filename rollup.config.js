import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/main.ts',
    output: {
        file: 'src/main.js',
        format: 'cjs'
    },
    plugins: [
        typescript({ sourceMap: true }),
        nodeResolve({ browser: true }),
        terser()
    ],
};

