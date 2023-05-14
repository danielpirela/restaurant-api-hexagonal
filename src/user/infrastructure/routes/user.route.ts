import { Router } from 'express'
import { UserController } from '../controller/user.controller'
import { UserUseCase } from '../../application/user.userCase'
import { MongoRepository } from '../repository/mongo.repository'

const router = Router()

const mongoRepository = new MongoRepository()
const userUseCase = new UserUseCase(mongoRepository)
const userController = new UserController(userUseCase)
router.post('/login', userController.loginUser)
router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)
router.post('/register', userController.createUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export default router
