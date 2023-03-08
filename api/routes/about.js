import express from 'express'
import { addPost, deletePost, getPost, getAbout, updatePost } from '../controllers/about.js';

const router = express.Router();


router.get("/", getAbout)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)


export default router;