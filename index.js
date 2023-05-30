const express=require('express')
const bodyParser=require('body-parser')

//local
const connectDb=require('./db')

const app=express()

app.use(bodyParser.json())



connectDb()
.then(()=>{
  console.log('db connected successfully')
  app.listen(3002,()=>{
    console.log('server connected');
  })

})
.catch((err)=>{console.log(err)})