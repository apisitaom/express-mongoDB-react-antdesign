const monngoose = require('mongoose')
const Schema = monngoose.Schema

const PaymentSchema = new Schema({
    payAmount : {type:Number},
    payDate: {type:Date, default: Date.now},
    slip : {type: String},
    payStatus : {type: String}
})

module.exports = Payment = monngoose.model('Payment', PaymentSchema)

