const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/" , (req , res) =>{
    res.send("Hi, I am live");
});

app.listen(PORT , () =>{
    console.log(`${PORT} Yes I am connected`);
});

app.get("/",(req,res)=>{
    res.json({message:`successfully running on port  ${PORT}`});
})