

const mongoose = require('mongoose');
const noteschema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const notemodel=mongoose.model('noteapp',noteschema)

module.exports = notemodel;
