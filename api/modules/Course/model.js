const mongoose = require( 'mongoose' )

const MODEL_NAME = 'Course'

const _schema = {
  name: String,
  teacher: {
    type: String,
    default: 'Suissa',
    required: true
  }
}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model( MODEL_NAME, schema )

module.exports = Model
