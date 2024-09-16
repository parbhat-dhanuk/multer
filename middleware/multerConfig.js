const multer = require("multer")

 const storage = multer.diskStorage({
    destination:function(req,file,cb){
       
        const allowedFilesTypes = ["image/png","image/jpeg","image/jpg"]
        if(!allowedFilesTypes.includes(file.mimetype)){
            return cb(new Error("This filetype is not Supported"))
          
        }
        cb(null,"./storage") //->cb(error,success)
    },

    filename: function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname)
        
    }
})

module.exports = {
    storage,multer
}
