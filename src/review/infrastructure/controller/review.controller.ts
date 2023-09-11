import { Request, Response } from 'express'
import { ReviewUseCase } from '../../application/review.reviewCase'
import { MongoRepository } from '../../../user/infrastructure/repository/mongo.repository'
import { ReviewWithUserData } from '../../domain/review.entity'
import { UserEntity } from '../../../user/domain/user.entity'
import userModel from '../../../user/infrastructure/model/user.schema'

export class ReviewController {
    constructor(private reviewUseCase: ReviewUseCase) {
        this.reviewUseCase = reviewUseCase
    }

    public createReview = async (req: Request, res: Response) => {
        const { title, content, rating, userId } = req.body
        const review = await this.reviewUseCase.createReview({
            title,
            content,
            rating,
            userId,
        })
        if (!review) return res.status(400)
        res.status(200).json(review)
    }

    public getAllReviews = async (req: Request, res: Response) => {
        const { offset, limit } = req.query
        const reviews = await this.reviewUseCase.getAllReviews()

        const reviewsWithUserPromises: any = reviews?.map(async (review) => {

            const userId = review.userId
            const userData: any = await userModel.findOne({ uuid: userId })
            const name = userData?.name



            return {
                uuid: review.uuid,
                title: review.title,
                content: review.content,
                rating: review.rating,
                userId: userId,
                name: name,
            }
        })
        const offsetNumber = parseInt(offset as string)
        const limitNumber = parseInt(limit as string)
        const reviewsWithUser = await Promise.all(reviewsWithUserPromises)
        const finalReview = reviewsWithUser.slice(offsetNumber, limitNumber)

        if (!finalReview) return res.status(400)
        res.status(200).send(finalReview)
    }

    public getReviews = async (req: Request, res: Response) => {
        const { offset, limit } = req.body
        const reviews = await this.reviewUseCase.getReviews(offset, limit)

        const reviewsWithUserPromises: any = reviews?.map(async (review) => {
            const userId = review.userId
            const userData: any = await userModel.findOne({ uuid: userId })
            const name = userData?.name

            return {
                uuid: review.uuid,
                title: review.title,
                content: review.content,
                rating: review.rating,
                userId: userId,
                name: name,
            }
        })

        const reviewsWithUser = await Promise.all(reviewsWithUserPromises)
        const finalReview = reviewsWithUser.slice(offset, limit)

        console.log(finalReview)
        if (finalReview) return res.status(400)
        res.status(200).send(finalReview)
    }

    public getReviewById = async (req: Request, res: Response) => {
        const { id } = req.params
        const review = await this.reviewUseCase.getReviewById(id)

        if (!review) return res.status(400)
        res.status(200).json(review)
    }

    public updateReview = async (req: Request, res: Response) => {
        const { id } = req.params
        const { title, content, rating } = req.body
        const review = await this.reviewUseCase.updateReview(
            id,
            title,
            content,
            rating
        )

        if (!review) return res.status(400)
        res.status(200).json(review)
    }

    public deleteReview = async (req: Request, res: Response) => {
        const { id } = req.params
        const review = await this.reviewUseCase.deleteReview(id)

        if (!review) return res.status(400)
        res.status(200).json(review)
    }
}
