const mongoose = require("mongoose");
const todoScheme = new mongoose.Schema({
    title : {type:String,required:true},
    status : {type:Boolean,default:false},
});
module.exports = mongoose.model('Todo',todoScheme);