const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    age:{type:Number, required: true},
    mobile:{type:String}
})
module.exports = User = mongoose.model('user', UserSchema)
