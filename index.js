const express = require('express');
const cors = require('cors');
const { Connection } = require('./Config/db');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send("Homepage")
})


app.listen(PORT, async () => {
    try{
        await Connection
        console.log('Connected To DB')
    }catch(err){
        console.log('Connection to db is not established')
        console.log(err)
    }
    console.log("Listen to the port", PORT)
})