'use strict'

module.exports = function (config) {
  config.set({
    frameworks: ['browserify', 'mocha'],
    files: ['test.js'],
    preprocessors: {
      '*.js': 'browserify'
    },
    browsers: ['PhantomJS'],
    browserify: {
      transform: [['es2020', {global: true}]]
    }
  })
}
