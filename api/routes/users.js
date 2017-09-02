const express = require( 'express' )
const router = express.Router()

const Controller = require( './../controllers' )

router.get( '/', ( req, res, next ) => 
  Controller.find( req, res, {} )
)

router.post( '/', ( req, res, next ) => 
  Controller.create( req, res )
)

module.exports = router
