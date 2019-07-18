const monngoose = require('mongoose')
const Schema = monngoose.Schema

const OrderSchema = new Schema({
   orderAmount: {type: Number},
   total :{type:Number},
   date: {type: Date, default: Date.now},

    //USER
    userName : {type:String},
    //TRANSPRT
    tacking : {type:String},
    //PAYMENT
    payAmount: {type: Number},
    //PRODUCT
    proName : {type: String},
    //SIZE , TYPE
    detail:{type: String}
})

module.exports = Order = monngoose.model('Order', OrderSchema)
