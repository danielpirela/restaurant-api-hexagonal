import { Router } from 'express'
import { PostController } from '../controller/post.controller'
import { PostUseCase } from '../../application/post.postCase'
import { MongoRepository } from '../repository/mongo.repository'

const router = Router()

const mongoRepository = new MongoRepository()
const userUseCase = new PostUseCase(mongoRepository)
const userController = new PostController(userUseCase)

router.get('/post', userController.getPosts)
router.get('/post/:id', userController.getPostById)
router.post('/post/create', userController.createPost)
router.put('/post/:id', userController.updatePost)
router.delete('post/:id', userController.deletePost)

export default router
