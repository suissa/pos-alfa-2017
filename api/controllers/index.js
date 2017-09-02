const Model = require( './../models/model' )

const find = ( req, res, query = {} ) => 
  Model.find( query, ( err, data ) => {
    if ( err ) return console.log( 'ERRO: ', err )

    return res.json( data )
  } )

module.exports = {
  find 
} 
