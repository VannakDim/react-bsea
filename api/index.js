import express from "express";
import { db } from "./db.js";
import authRoutes from "./routes/auth.js"
import aboutRoutes from "./routes/about.js"
import teamRoutes from "./routes/team.js"
import multer from "multer";
import { updateAboutImg } from "./controllers/about.js";

const port = 8000;
const app = express()

app.use(express.json())

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'../client/public/upload')
    },
    filename: function (req, file, cb){
        cb(null, Date.now()+ file.originalname)
    }
})

const upload = multer({storage})

app.post('/api/upload', upload.single('file'), function (req,res){
    const file = req.file;
    
    updateAboutImg(file.filename)
    res.status(200).json(file.filename)
})

app.use("/api/auth", authRoutes)
app.use("/api/about", aboutRoutes)
app.use("/api/team", teamRoutes)

app.listen(port, () => {
    console.log(`API app listening on port ${port}!`)
})