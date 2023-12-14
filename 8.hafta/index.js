const express = require("express");
const bodyParser = require("body-parser");
const elasticClient=require("./services/elastic-client");
const createIndex=require("./services/create-index");
const routes=require("./routes");

require("express-async-errors");
const app = express();

app.use(bodyParser.json());
app.use(routes);


//createIndex("posts"); bu kısmı ilk oluştur. Eğer oluşturduktan sonra elasticsearch hata verirse burayı yorum satırına al.

app.get("/", (req, res) => {
  res.status(200).send("Success");
});


app.listen(8080,(res,err)=>{
  console.log(8080);
  if(err)console.log(err);
});
