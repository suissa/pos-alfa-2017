module.exports = ( Model ) => ( req, res ) => {

  const body = req.body
  
  // Model.create( body, ( err, data ) => {
  //   if ( err ) return console.log( 'ERRO: ', err )

  //   return res.json( data )
  // } )

  Model.create( body )
    .then( ( data ) => res.json( data ) )
    .catch( ( err ) => console.log( 'ERRO: ', err ) )
}