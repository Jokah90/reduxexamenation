import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';
const router = express.Router();

//200 and 400 handlers
router.get('/', getPosts);
router.post('/', createPost);




export default router;