const express = require('express');
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(cors({
  credentials:true,
  headers:["Content-Type"],
  origin: "http://localhost:3000"
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
