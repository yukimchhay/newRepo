const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
const userRoutes = require("./routes/userRoute");
app.use(express.json())
app.get('/',(req,res)=>{
    res.send({
        message:"runnning "
    })
})
app.use('/api/users' , userRoutes)
app.listen(PORT, ()=>{
    console.log("this sever running on port " , PORT)
})