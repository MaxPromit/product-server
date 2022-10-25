const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 4000;
const productCollection = require("./Data/product.json")

app.get("/", (req,res) => {
    res.send("Server is runnig")
})

app.get("/allProducts", (req,res) =>{
    res.send(productCollection)
})

app.get("/product/:id", (req,res) =>{
    const id = req.params.id;
    const getSingleItem = productCollection.find(p => p._id === id)
    if(!getSingleItem){
        res.send("Khuje Pai Nai")
    }
    res.send(getSingleItem)
})

app.listen(Port, ()=>{
    console.log('Port is Running On', Port)
})