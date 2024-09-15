 const express = require("express")
 const app = express()


 const Database= require("./database/index")
  Database()

  const book = require("./model/bookModel")

//   multer configuration

 const{multer,storage}=require("./middleware/multerConfig")
 const upload = multer({ storage: storage })

  app.use(express.json())

 //CREATE

 app.post("/book",upload.single("image"), async (req,res)=>{
   const {bookName,bookPrice,authorName}=req.body

  await book.create({
    bookName:bookName,
    bookPrice:bookPrice,
    authorName:authorName
   })
   res.status(201).json({
    message:"Book created successfully "
   })

 })

//READ ALL

app.get("/book", async(req,res)=>{
 const books = await book.find()  // array ma return garxa
 console.log(books)
res.status(200).json({
    message:"Books fetched successfully",
    data:books
})
})

//Single Read

app.get("/book/:id",async (req,res)=>{
const {id} = req.params
const  books= await book.findById(id)  //Object ma return garxa
   if(!books){
    res.status(404).json({
        message:"Nothing is found"
    })
   }else{
    res.status(200).json({
        message:"book fetched successfully",
        data:books
    })
   }

})

// DELETE

app.delete("/book/:id", async (req,res)=>{
    const {id}=req.params
    await book.findByIdAndDelete(id)
    res.status(200).json({
        message:"book deleted successfully"
        
    })
})

//UPDATE

app.patch("/book/:id",async(req,res)=>{
    const {bookName,bookPrice,authorName} = req.body
    const {id} = req.params
     await book.findByIdAndUpdate(id,{
        bookName:bookName,
        bookPrice:bookPrice,
        authorName:authorName 
    })

    res.status(200).json({
        message:"Book updated successfully",
    })
})





 app.listen(3000,()=>{
    console.log("Running on port 3000")
 })