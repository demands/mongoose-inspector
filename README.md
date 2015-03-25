# mongoose-inspector

Simple [json-schema](http://json-schema.org/) representations from your [mongoose
models](http://mongoosejs.com/)

[![build status](https://secure.travis-ci.org/demands/mongoose-inspector.svg)](http://travis-ci.org/demands/mongoose-inspector)
[![dependency status](https://david-dm.org/demands/mongoose-inspector.svg)](https://david-dm.org/demands/mongoose-inspector)

## Usage

```javascript
var inspector = require('mongoose-inspector');
var Cat = mongoose.model('Cat', { name: String });
var catSchema = inspector.inspect(Cat);

/*
catSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Cat",
  "type": "object",
  "properties": {
    "_id": { "type": "string" }
    "name": { "type": "string" }
    "__v": { "type": "string" }
  }
}
*/
```

## Credits
[Max Edmands](https://github.com/demands/)

## License
ISC
