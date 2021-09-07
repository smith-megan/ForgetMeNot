const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();
app.use(express.json())
app.use(cors());

app.get('/posts', async function (req,res) {
  console.log(results)
  // let postsObj=results
  res.status(200).send(postObj)
})

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8088, ()=>{console.log(`we are now on port${8088}`)});