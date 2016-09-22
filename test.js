'use strict'

/* globals describe, beforeEach, it */

const angular = require('angular')
const assert = require('assert')
const percent = require('./')

require('angular-mocks')

const inject = angular.mock.inject

describe('percent', function () {
  beforeEach(angular.mock.module(percent))

  it('is an identity for non-numbers', function () {
    assert.equal(interpolate('{{"boop" | percent}}'), 'boop')
  })

  it('converts a number to a percent', function () {
    assert.equal(interpolate('{{0.12 | percent}}'), '12%')
  })

  function interpolate (template) {
    var result
    inject(function ($interpolate) {
      result = $interpolate(template)({})
    })
    return result
  }
})
