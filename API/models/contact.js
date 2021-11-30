const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    createAt : {
        type : Date,
        default : Date.now
    }

})

module.exports = mongoose.model("ContactInfo",contactSchema)