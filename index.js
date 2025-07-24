const http = require('http');
const express = require('express');
const { send } = require('process');
const app = express();

// express ki vajah se mujhe ye bhi karne ki jarurat nahi hai
// const myserver = http.createServer(app);


app.get('/',(req,res)=>{
    return res.send(`Home page hai bhai jii`)
})

app.get('/about',(req,res)=>{
    return res.send(`About page hai bhai jii`)
})


const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})