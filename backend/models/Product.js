const monngoose = require('mongoose')
const Schema = monngoose.Schema

const ProductChema = new Schema({
    proName: {type: String},
    picture : {type: String},

    //SIZE
    sizeName:{type:String},
    //TYPE
    typeName:{type:String}
})
module.exports = Product = monngoose.model('Product', ProductChema)
