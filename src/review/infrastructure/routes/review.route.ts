<<<<<<< HEAD
import { Router } from 'express'
import { ReviewController } from '../controller/review.controller'
import { ReviewUseCase } from '../../application/review.reviewCase'
import { MongoRepository } from '../repository/mongo.repository'

const router = Router()

const mongoRepository = new MongoRepository()
const reviewUseCase = new ReviewUseCase(mongoRepository)
const reviewController = new ReviewController(reviewUseCase)

router.get('/review', reviewController.getAllReviews)
router.get('/review/reviews', reviewController.getReviews)
router.get('/review/:id', reviewController.getReviewById)
router.post('/review/create', reviewController.createReview)
router.put('/review/:id', reviewController.updateReview)
router.delete('/review/:id', reviewController.deleteReview)

export default router
=======
import { Router } from 'express'
import { ReviewController } from '../controller/review.controller'
import { ReviewUseCase } from '../../application/review.reviewCase'
import { MongoRepository } from '../repository/mongo.repository'

const router = Router()

const mongoRepository = new MongoRepository()
const reviewUseCase = new ReviewUseCase(mongoRepository)
const reviewController = new ReviewController(reviewUseCase)

router.get('/review', reviewController.getReviews)
router.get('/review/:id', reviewController.getReviewById)
router.post('/review/create', reviewController.createReview)
router.put('/review/:id', reviewController.updateReview)
router.delete('/review/:id', reviewController.deleteReview)

export default router
>>>>>>> 452c12968e773914fdb978a569c50051cf4fb598
