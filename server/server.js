const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

app.use  (express.json())


app.get('/getuserid/:userId',(req,res)=>{
  const { userId } = req.params
 res.json(userId)
})
app.get('/',(req,res)=>{
  console.log(req.params); 
 res.json('estas pegando como un campeon')
})

app.post('/crear-usuario',(req,res)=>{
console.log(req.body);
})


app.listen(port,()=>{
  console.log(`Estamos escuchando puerto ${port}`);
})