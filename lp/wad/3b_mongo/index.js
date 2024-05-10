const dbConnect = require('./mongodb')  //to import mongodb
const express = require('express'); //import express
const app=express(); //create an instance of the express server
app.use(express.json())

//get API
app.get('/',async(req,res) => {         //url and callback function- consist of two parameters requset and response
let result = await dbConnect();
result = await result.find().toArray();
res.send(result);
})    

//post API
app.post('/',async(req,res) => {         
    let result = await dbConnect();
    result =await result.insertOne(req.body);
    res.send('Data inserted successfully');
    }) 

app.put('/:name',async(req,res) => {         
    let result = await dbConnect();
    result =await result.updateOne({name:req.params.name},{$set:req.body});
    res.send('Data updated successfully');
        })

//Delete API
app.delete('/:name',async(req,res) => {         
    let result = await dbConnect();
    result =await result.deleteOne({name:req.params.name});
    res.send('Data deleted successfully');
        })

app.listen(3000);