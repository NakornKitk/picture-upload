// use mongoose
const mongoose = require("mongoose")


// connect to MongoDB
const dbUrl = "mongodb://localhost:27017/productDB"
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))


// Schema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})


// Model
let Product = mongoose.model("products",productSchema)


// import model
module.exports = Product

// function for saving a data
module.exports.saveProduct=function(model,data){
    model.save(data)
}