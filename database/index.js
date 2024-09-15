  const mongoose = require("mongoose")
  const conn ="mongodb+srv://parbhat:rabel@cluster0.va8bi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    const connectionToDatabase = async()=>{
    await mongoose.connect(conn)
    console.log("Database Connected Successfully")
  }

  module.exports = connectionToDatabase