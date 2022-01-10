'use strict'

const { ok } = require('assert')
const test = () => {
  const innerF = () => {
    ok(
      constDeclaredAfter === null,
      `found "constDeclaredAfter" variable`
    )
  }
  const constDeclaredAfter = null
  innerF()
}

test()
