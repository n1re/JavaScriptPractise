'use strict';

const revert = require('./index');
const assert = require('assert').strict;

assert.deepStrictEqual(revert({ 1: 'a' }), { a: '1' });