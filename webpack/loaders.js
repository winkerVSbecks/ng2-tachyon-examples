'use strict';

const path = require('path');

exports.angular = { // ships in ES6 format now
  test: /\.js$/,
  loader: 'babel-loader',
  include: /angular/,
  exclude: /node_modules/,
  query: {
    compact: false,
  },
};

exports.tslint = {
  enforce: 'pre',
  test: /\.ts$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

exports.ts = {
  test: /\.ts$/,
  loader: '@ngtools/webpack',
};

exports.ts_JiT = {
  test: /\.ts$/,
  loaders: [
    'awesome-typescript-loader',
    'angular2-template-loader',
  ],
};

exports.istanbulInstrumenter = {
  enforce: 'post',
  test: /^(.(?!\.spec))*\.ts$/,
  loader: 'istanbul-instrumenter-loader',
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/,
};

exports.localCss = {
  test: /\.css$/,
  include: path.resolve(process.cwd(), 'src', 'app'),
  loader: 'to-string!css?-minimize!postcss',
  exclude: /node_modules/,
};

exports.globalCss = {
  test: /\.css$/,
  include: path.resolve(process.cwd(), 'src', 'styles'),
  loader: 'style!css?-minimize!postcss',
  exclude: /node_modules/,
};

exports.svg = makeFileLoader(/\.svg$/);
exports.eot = makeFileLoader(/\.eot$/);
exports.woff = makeFileLoader(/\.woff$/);
exports.woff2 = makeFileLoader(/\.woff2$/);
exports.ttf = makeFileLoader(/\.ttf$/);

function makeFileLoader(pattern) {
  return {
    test: pattern,
    loader: 'file',
    exclude: /node_modules/,
  };
}
