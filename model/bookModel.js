 const mongoose = require("mongoose")

    const bookSchema =   new mongoose.Schema({
       
        bookName:{
            type:String
        },
        bookPrice:{
            type:Number
        },
        authorName:{
            type:String
        },
        imageUrl:{
            type:String
        }

       })

       const Book = mongoose.model("books",bookSchema)

       module.exports = Book