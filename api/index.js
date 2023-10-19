const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(cors({
  credentials:true,
  headers:["Content-Type"],
  origin:process.env.HOST 
}))

function generate(){
  let a = [];
  for(let i = 0; i < 10; i++){
    a.push(Math.random() * 100);
  }
  return a;
}

app.get('/info', (req, res) => {
  let arr = generate();
  res.json(arr).status(200);
})

app.listen(4000);
