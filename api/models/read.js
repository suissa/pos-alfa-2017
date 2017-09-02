const Model = require( './model' )

const find = ( query = {} ) =>
  Model.find( query, (err, data) => {
    if (err) return console.log('ERRO: ', err)

    return console.log('Listagem:', data)
  })

module.exports = {
  find
}