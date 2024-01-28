const express=require('express');
const mongoose=require('mongoose');
const studentmodel = require('./schema/studentmodel/studentmodel');
const app=express();
app.use(express.json());

// const connection
mongoose.connect('mongodb://localhost:27017/Schoolmanagmentsytem').then(() => {
console.log("db connected successfully !!")
}).catch((error) =>{
    console.log("db connection failed",error);
});

//post new  student
app.post('/student/create',async(req,res)=>{
    const xog= await studentmodel(req.body)
    const saveData= await xog.save()
    if(saveData){
        res.send(saveData)
    }
})
//get data
app.get('/student/create', async(req,res)=>{
    const getData = await studentmodel.find()
    res.send(getData)
})
app.get('/')
//new update that will learn know about the data and update


//end
app.get('/', (req, res)=>{
    res.send('app started');
})
app.listen(4000,()=>{
    console.log('server started on port 4000')
})