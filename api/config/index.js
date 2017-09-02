const mongoose = require( 'mongoose' )
const dbURI = 'mongodb://localhost/pos-alfa-2017'
mongoose.connect( dbURI )

mongoose.connection.on( 'conncected', () => console.log( `Mongoose connected open to ${ dbURI }` ) )

mongoose.connection.on( 'disconnected', () => console.log( `Mongoose connection disconnected` ) )
mongoose.connection.on( 'open', () => console.log( `Mongoose connection open` ) )
mongoose.connection.on( 'error', ( err ) => console.log( `Mongoose connection error:${ err }` ) )
process.on( 'SIGINT', () => mongoose.connection.close( () => {
  console.log( 'Mongoose disconnected through app termination' )
  process.exit( 0 )
} ) )

module.exports = mongoose
