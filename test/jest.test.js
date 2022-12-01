/* global test, expect */
'use strict'

const build = require('..')

test('works with jest', done => {
  const { create, emit, emitted } = build()

  create('FastifyDeprecation', 'CODE', 'Hello %s')
  emit('CODE', 'world')

  // we cannot actually listen to process warning event
  // because jest messes with it (that's the point of this test)
  // we can only test it was emitted indirectly
  // and test no exception is raised
  setImmediate(() => {
    expect('CODE' in emitted).toBeTruthy()
    done()
  })
})
