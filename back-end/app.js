const express=require('express')
const app=express()
const port=3003

app.use(express.static("../front-end"))

app.get('*',(req,res)=>{
    res.send("Page Not Found!")
})



app.listen(port,()=>{
    console.log(`server running...`);
    
})