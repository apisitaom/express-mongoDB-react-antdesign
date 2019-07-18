const monngoose = require('mongoose')
const Schema = monngoose.Schema

const Adminschema = new Schema({
    adName : {type: String},
    address : {type: String},
    email : {type: String, required: true},
    password: {type:String, required: true},
    phone : {type: String}
})
module.exports = Admin = monngoose.model('Admin', Adminschema)
