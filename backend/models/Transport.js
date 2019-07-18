const monngoose = require('mongoose')
const Schema = monngoose.Schema

const TransportSchema = new ({
    tracking:{type:String}, status:{type:String}
})
module.exports = Transport = monngoose.model('Transport', TransportSchema)
