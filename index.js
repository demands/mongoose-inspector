module.exports = {
  inspect: function (model) {
    var name = model.modelName
      , schema = model.schema
      , properties = {}

    schema.eachPath(function(pathName) {
      properties[pathName] = { 'type': 'string' }
    })

    return {
      '$schema': 'http://json-schema.org/draft-04/schema#'
    , 'description': name
    , 'type': 'object'
    , 'properties': properties
    }
  }
}
