const mongoose = require( 'mongoose' )

const _schema = {
  name: String,
  age: Number
}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model( 'Pokemon', schema )

module.exports = Model
