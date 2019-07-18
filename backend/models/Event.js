const monngoose = require('mongoose')
const Schema = monngoose.Schema

const EventSchema = new Schema({
    time : {type: Number, default:(new Date()).getTime()},
    date : {type:Date, default: Date.now},
    totalProduct : {type: Number},
    inventory: {type: Number},
    // (เหลือ)
    price : {type: Number}
    
})

module.exports = Event = monngoose.model('Event', EventSchema)
