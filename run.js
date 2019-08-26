'use strict'

const fs = require('fs')

const path = process.argv[2];


/**
 * execution globals
 */
const assert = require('assert').strict;

if (path) {
    const code = fs.readFileSync(path).toString('utf-8')

    eval(code);
} else {
    throw new Error('Need a path for a file to execute passed as 3rd command line argument')
}