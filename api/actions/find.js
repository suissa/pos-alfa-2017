module.exports = ( Model ) => ( req, res, query = {} ) => 
  Model.find( query )
        .then( ( data ) => res.json( data ) )
        .catch( ( err ) => console.log( 'ERRO: ', err ) )

  // Model.find( query, ( err, data ) => {
  //   if ( err ) return console.log( 'ERRO: ', err )

  //   return res.json( data )
  // } )
      