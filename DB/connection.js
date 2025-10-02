

const mongoose = require('mongoose')

const connectionString = process.env.connection_string

mongoose.connect(connectionString).then(()=>{
    console.log("MnogoDB Atlass connected successfully to bronchoServer ");
    
}).catch(err=>{
    console.log("MongoDb connection failed",err);
    
})