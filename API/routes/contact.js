const express = require("express")
const ContactInfo=require("../models/contact")
const router = express.Router()

router.post("/",(req,res)=>{
    let info = {
        confirmation : "OK"
    }
    console.log(req.body)
    res.send(req.body)
})
module.exports = router
