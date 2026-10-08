const getUsers = (req, res)=>{
    res.json([
        {
            id:1 ,
            name: "sura", 
            age:13

        },
        {
            id:2 , 
            name: "kira",
            age:14 
        }
    ])
}
const createUser = (req ,res)=>{
    const {name ,age } = req.body  
    res.status(201).json({message :" created with" , name , age })
} 
module.exports = {getUsers , createUser}