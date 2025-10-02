
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/route')
require('./DB/connection')



const brongoServer = express()  //assign server into custom server
  
brongoServer.use(cors())  //use server with cors
brongoServer.use(express.json())  //set the json before router 
brongoServer.use(router)  //use server with cors
 


const PORT = process.env.PORT || 3000;
  

//to run port on the server we have to use listen()
brongoServer.listen(PORT, ()=>{
    console.log(`brongoServer running at port: ${PORT} && Waitng For Client Request`); 
});


//to get datas on browser we want to get the server

brongoServer.get('/',(req,res)=>{
    res.send(`<h1> brongoServer running at port: ${PORT} && Waitng For Client Request <h1/>`)

})  
