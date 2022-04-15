const express = require('express')
const passport = require('passport')
//const passport = require('../config/passport')

const router =express.Router()

//auth with google
//route get/auth
router.get('/google', passport.authenticate('google',{scope:['profile']}))

//google auth callback
//get/auth/googlr callback
router.get('/google/callback',passport.authenticate('google',{failureRedirect:'/'}),
(req,res)=>{
    res.redirect('/dashboard')
})

module.exports=router