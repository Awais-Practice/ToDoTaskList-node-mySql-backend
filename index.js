const express = require("express");
const app = express();
var cors = require('cors');

app.use(cors())
app.get("/",(req,res)=>{
    
       let data=[
            {"task":"taskOne","created":"10 days ago"},
            {"task":"taskTwo","created":"15 days ago"},
            {"task":"taskThree","created":"20 days ago"},
            {"task":"TaskFour","created":"20 days ago"}
          ]
          res.send(data)
})
app.listen(5000)
