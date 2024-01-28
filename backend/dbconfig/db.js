const mongoose=require('mongoose')
const DBconn = (
   await mongoose.connect('mongodb://localhost:27017/mydb').then(() => {
        console.log("db connection established successfully")
        }).catch((error) =>{
            console.log("db connection failed",error);
        })
)
//db connection

module.exports =DBconn();