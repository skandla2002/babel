const fs = require('fs');
const babel = require('@babel/core');

const filename = './src/code.js';
const source = fs.readFileSync(filename, 'utf-8');
const presets = ['@babel/preset-react'];
const plugins = ['@babel/plugin-transform-arrow-functions'];
const { code } = babel.transformSync(source, {
    filename,
    presets,
    plugins,
    configFile: false // babel.config.js 사용여부
});

console.log(code);