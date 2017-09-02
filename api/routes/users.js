const express = require( 'express' )
const router = express.Router()

const Controller = require( './../controllers' )

/* GET users listing. */
router.get( '/', ( req, res, next ) => 
  Controller.find( req, res, {} )
)

module.exports = router
