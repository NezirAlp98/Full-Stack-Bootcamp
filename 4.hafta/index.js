const express=require('express')
const bodyParser=require('body-parser')
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const routes=require("./routes") //routes dan sonra bir yol belirtmezsek routes içindeki index i görür!!!
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const PORT=8080;

app.get("/",(req,res)=>{
    res.status(200).send("working")
})

dotenv.config();


mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Connected!'));
  

app.use("/api",routes);



app.listen(PORT)
console.log(`${PORT} runnig...`)