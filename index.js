const express = require('express');
const cors = require('cors');
const { Connection } = require('./Config/db');
const { LoginRouter } = require('./Routes/Login.routes');
const { SignupRouter } = require('./Routes/signup.routes');
const { TodosRouter } = require('./Routes/Todos.routes');
const { authentication } = require('./Middleware/Authentication');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send("Homepage")
})

app.use("/signup", SignupRouter);
app.use("/login", LoginRouter);
app.use("/todos", authentication, TodosRouter);


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