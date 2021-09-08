const express = require('express');
const cors = require('cors');
const axios=require('axios')
const path = require('path');

const app = express();
app.use(express.json())
app.use(cors());

let eventList=[]

app.get('/posts', function (req,res) {
  // console.log(results)
  // let postsObj=results
  res.status(200).send("hi")
})

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/event', (req,res)=>{
  eventList.push(req.body)
  res.status(200).send('did it')
  return eventList  
})

app.get('/list',(req,res)=>{
  res.status(200).send(eventList)
})

app.listen(process.env.PORT || 4088, ()=>{console.log(`we are now on port${4088}`)});