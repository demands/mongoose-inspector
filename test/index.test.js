var inspector = require('..')
,   assert = require('assert')
,   mongoose = require('mongoose')

describe('mongoose-inspector', function () {
  it('should create a schema from a mongoose model', function (done) {
    var Cat = mongoose.model('Cat', { name: String })
    ,   catSchema = inspector.inspect(Cat)

    assert.deepEqual(catSchema, {
      '$schema': 'http://json-schema.org/draft-04/schema#'
    , 'description': 'Cat'
    , 'type': 'object'
    , 'properties': {
        '_id': { 'type': 'string' }
      , 'name': { 'type': 'string' }
      , '__v': { 'type': 'string' }
      }
    })
    done()
  })
})
