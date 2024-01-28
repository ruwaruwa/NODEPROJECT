const express=require('express')
const app=express()
app.use(express.json()) //telling the server the data is json type
const cors=require('cors')
app.use(cors()); //alows backend to connect to frontend
// const Dbconnection=require('./dbconfig/db')
// Dbconnection()
const mongoose=require('mongoose');
const notemodel = require('./schema/nodeModel');

//db connection
mongoose.connect('mongodb://localhost:27017/mynotedb').then(() => {
console.log("db connection established successfully")
}).catch((error) =>{
    console.log("db connection failed",error);
});




//new data
app.post('/note/create',async(req,res) =>{
const newdata=notemodel(req.body)
const savedata= await newdata.save()
if(savedata){
    res.send(savedata)
}
})
//
app.get('/note/create', async(req,res)=>{
    const getData = await notemodel.find()
   
    if(getData){
        res.send(getData)
    }
})
//get data by id
app.get ('/note/create/:id' ,async(req,res)=>{
    const{id}=req.params
    const getdata= await notemodel.findById(id)
    res.send(getdata)
})
//update
app.put('/note/update/:id', async(req,res)=>{
    const updateData = await  notemodel.updateOne(
        {_id:req.params.id},
        {$set:req.body}
    )
    if(updateData){
res.send(updateData)
    }
    })
    //get data by id
    app.get ('/note/get/:id',async(req,res)=>{
       // const{id}=req.params
        const getdata= await notemodel.find({_id:req.params.id})
        if(getdata){
            res.send(getdata)
        }
       
    })

    //end get by id
    
    //Delete data 
app.delete('/note/delete/:id',async(req,res) => {
    const deletedata= await notemodel.deleteOne(
        {_id:req.params.id}
    )
    if(deletedata){
        res.send("Data success fully deleted")
    }
})





app.listen(1000,(req,res)=>{
console.log('server listening on 1000')
});
app.get('/',(req,res)=>{
res.send('the sever started')
});