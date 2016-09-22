'use strict'

const angular = require('angular')
const toPercent = require('decimal-to-percent')

module.exports = angular.module('percent', [])
  .filter('percent', filterFactory)
  .name

function filterFactory () {
  return function percentFilter (value) {
    if (typeof value !== 'number') return value
    return toPercent(value)
  }
}
