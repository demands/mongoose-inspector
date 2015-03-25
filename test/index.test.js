var inspector = require('..')
,   assert = require('assert')
,   mongoose = require('mongoose')

describe('mongoose-inspector', function () {
  beforeEach(function (done) {
    mongoose.models = {}
    mongoose.modelSchemas = {}
    done()
  })

  it('should create a schema from a mongoose model', function (done) {
    var Cat = mongoose.model('Cat', { name: String })
    ,   catSchema = inspector.inspect(Cat)

    assert.deepEqual(catSchema, {
      '$schema': 'http://json-schema.org/draft-04/schema#'
    , 'description': 'Cat'
    , 'type': 'object'
    , 'properties': {
        '_id': {
          'type': 'string'
        , 'pattern': '^[a-fA-F0-9]{24}$'
        }
      , 'name': { 'type': 'string' }
      , '__v': { 'type': 'number' }
      }
    })
    done()
  })

  it('should understand required fields', function (done) {
    var Cat = mongoose.model('Cat', { name: { type: String, required: true } })
    ,   catSchema = inspector.inspect(Cat)

    assert(catSchema.properties.name.required)
    done()
  })
})
