var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    imagePath: {type: String, required: false},
    imagePath2:{type: String, required: false},
    imagePath3:{type: String, required:false},
    imagePath4:{type:String, required:false},
    title: {type: String, required: true},
    description: {type: String, required: true},
    description2:{type: String, required:true},
    type:{type: String, required: true},
    height:{type: String, required:true},
    width:{type: String, required:true},
    material:{type:String, required:true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);