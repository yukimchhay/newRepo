const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
app.use(express.json())
app.get('/',(req,res)=>{
    res.send({
        message:"runnning "
    })
})
app.listen(PORT, ()=>{
    console.log("this sever running on port " , PORT)
})