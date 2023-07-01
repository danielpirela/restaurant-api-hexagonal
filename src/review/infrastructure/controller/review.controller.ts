import { Request, Response } from 'express'
import { ReviewUseCase } from '../../application/review.reviewCase'

export class ReviewController {
    constructor(private reviewUseCase: ReviewUseCase) {
        this.reviewUseCase = reviewUseCase
    }

    public createReview = async (req: Request, res: Response) => {
        const { title, content } = req.body
        const review = await this.reviewUseCase.createReview({ title, content })

        if (!review) return res.status(400)
        res.status(200).json(review)
    }

    public getAllReviews = async (req: Request, res: Response) => {
        const reviews = await this.reviewUseCase.getAllReviews()

        if (!reviews) return res.status(400)
        res.status(200).json(reviews)
    }

    public getReviews = async (req: Request, res: Response) => {
        const { offset, limit } = req.body
        const reviewsTpm = await this.reviewUseCase.getReviews(offset, limit)

        const reviews = reviewsTpm?.slice(offset, limit)

        if (!reviews) return res.status(400)

        res.status(200).json(reviews)
    }

    public getReviewById = async (req: Request, res: Response) => {
        const { id } = req.params
        const review = await this.reviewUseCase.getReviewById(id)

        if (!review) return res.status(400)
        res.status(200).json(review)
    }

    public updateReview = async (req: Request, res: Response) => {
        const { id } = req.params
        const { title, content } = req.body
        const review = await this.reviewUseCase.updateReview(id, title, content)

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
