const mongoose = require('mongoose');

const studentSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    studentID:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    addres:{
        type:String,
        required:true
    },
    // phone:{
    //     type:Number,
    //     required:true
    // },, 
     phone:{
        type:String,
        required:true
    },

})
// module.exports.studentmodel=mongoose.model('StudentModel',studentSchema)
const studentmodel = mongoose.model('Student',studentSchema)
module.exports = studentmodel