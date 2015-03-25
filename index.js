var inspector = {}
module.exports = inspector

inspector.jsonSchemaForMongooseSchemaType = function (mongooseSchemaType, mongoose) {
  var jsonSchema = {}

  if (mongooseSchemaType instanceof mongoose.SchemaTypes.String) {
    jsonSchema.type = 'string'
  } else if (mongooseSchemaType instanceof mongoose.SchemaTypes.ObjectId) {
    jsonSchema.type = 'string'
    jsonSchema.pattern = '^[a-fA-F0-9]{24}$'
  } else if (mongooseSchemaType instanceof mongoose.SchemaTypes.Number) {
    jsonSchema.type = 'number'
  }

  if (mongooseSchemaType.isRequired) {
    jsonSchema.required = true
  }

  return jsonSchema
}

inspector.inspect = function (model) {
  var name = model.modelName
    , mongoose = model.db.base
    , schema = model.schema
    , properties = {}

  schema.eachPath(function(pathName, schemaType) {
    properties[pathName] = inspector.jsonSchemaForMongooseSchemaType(schemaType, mongoose)
  })

  return {
    '$schema': 'http://json-schema.org/draft-04/schema#'
  , 'description': name
  , 'type': 'object'
  , 'properties': properties
  }
}
