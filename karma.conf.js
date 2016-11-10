'use strict';

process.env.TEST = true;

const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');

module.exports = (config) => {
  const coverage = config.singleRun ? ['coverage'] : [];

  config.set({
    frameworks: [
      'jasmine',
    ],

    plugins: [
      'karma-jasmine',
      'karma-sourcemap-writer',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-remap-coverage',
      'karma-spec-reporter',
      'karma-chrome-launcher',
    ],

    files: [
      './src/tests.entry.ts',
      {
        pattern: '**/*.map',
        served: true,
        included: false,
        watched: true,
      },
    ],

    preprocessors: {
      './src/tests.entry.ts': [
        'webpack',
        'sourcemap',
      ],
      './src/**/!(*.spec).(ts|js)': [
        'sourcemap',
      ],
    },

    webpack: {
      entry: './src/tests.entry.ts',
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
      },
      module: {
        rules:
          combinedLoaders().concat(
            config.singleRun
              ? [ loaders.istanbulInstrumenter ]
              : [ ]),
      },
      stats: { colors: true, reasons: true },
      plugins,
    },

    webpackServer: {
      noInfo: true, // prevent console spamming when running in Karma!
    },

    reporters: ['spec']
      .concat(coverage)
      .concat(coverage.length > 0 ? ['remap-coverage'] : []),

    // only output json report to be remapped by remap-istanbul
    coverageReporter: {
      type: 'in-memory',
    },

    remapCoverageReporter: {
      html: './coverage',
      json: './coverage/coverage.json',
    },

    port: 9999,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'], // Alternatively: 'PhantomJS'
    captureTimeout: 6000,
  });
};

function combinedLoaders() {
  return Object.keys(loaders).reduce(function reduce(aggregate, k) {
    switch (k) {
    case 'istanbulInstrumenter':
    case 'tslint':
      return aggregate;
    default:
      return aggregate.concat([loaders[k]]);
    }
  },
  []);
}
