import { Router } from 'express'
import { PostController } from '../controller/post.controller'
import { PostUseCase } from '../../application/post.postCase'
import { MongoRepository } from '../repository/mongo.repository'

const router = Router()

const mongoRepository = new MongoRepository()
const postUseCase = new PostUseCase(mongoRepository)
const postController = new PostController(postUseCase)

router.get('/post', postController.getPosts)
router.get('/post/:id', postController.getPostById)
router.post('/post/create', postController.createPost)
router.put('/post/:id', postController.updatePost)
router.delete('/post/:id', postController.deletePost)

export default router
