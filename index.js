'use strict'

const angular = require('angular')
const autoPrecision = require('precision')
const roundPrecision = require('round-precision')

function decimalToPercent(decimal, precision) {
  if (typeof precision !== 'number') precision = autoPrecision(decimal)
  return roundPrecision(decimal * 100, precision) + '%'
}

module.exports = angular.module('percent', [])
  .filter('percent', filterFactory)
  .name

function filterFactory () {
  return function percentFilter (value, precision) {
    if (typeof value !== 'number') return value
    return decimalToPercent(value, precision)
  }
}
