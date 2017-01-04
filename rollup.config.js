import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'cluster.js',
    dest: 'cluster.bundle.js',
    format: 'iife',
    plugins: [
        resolve({
            jsnext: true,
        }),
        commonjs(),
        buble(),
    ],
};
