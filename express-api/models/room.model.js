const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*     var commentSchema = new Schema({
        comment:String,
        user:{
            type:Schema.Types.ObjectId,
            ref:'user'
        }
    }) */

var roomSchema = new Schema({
    price: Number,
    image: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    categories: {
        type: String,
        enum: ['topRoom', 'normal']
    },
    numberOfRoom: Number,
    carParking: {
        type: Boolean,
        default: false
    },
    bikeParking: {
        type: Boolean,
        default: false
    },
    address: String,
    description: String,
    map: {
        isMap: {
            type: Boolean,
            default: false
        },
        lat: Number,
        lng: Number
    },
    comment: [{
        comment: String,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    }]
}, {
    timestamps: true
})

var roomModel = mongoose.model('room', roomSchema);

module.exports = roomModel;