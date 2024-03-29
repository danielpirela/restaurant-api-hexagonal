import { ReviewEntity } from '../../domain/review.entity'
import { ReviewRepository } from '../../domain/review.repository'
import reviewModel from '../model/review.schema'

export class MongoRepository implements ReviewRepository {
    async getAllReviews(): Promise<ReviewEntity[] | null> {
        const review: ReviewEntity[] | null = await reviewModel.find()
        return review
    }
    async getReview(uuid: string): Promise<ReviewEntity | null> {
        const review: ReviewEntity | null = await reviewModel.findOne({ uuid })
        return review
    }
    async getReviews(): Promise<ReviewEntity[] | null> {
        const review: ReviewEntity[] | null = await reviewModel.find()
        return review
    }

    async createReview(reviewIn: ReviewEntity): Promise<any> {
        const review = await reviewModel.create(reviewIn)
        return review
    }

    async deleteReview(uuid: string): Promise<ReviewEntity | null> {
        const review: ReviewEntity | null = await reviewModel.findOneAndDelete({
            uuid,
        })
        return review
    }

    async editReview(
        uuid: string,
        title: string,
        content: string,
        rating: number
    ): Promise<ReviewEntity | null> {
        const review: ReviewEntity | null = await reviewModel.findOneAndUpdate(
            { uuid },
            { title, content, rating },
            { new: true }
        )
        return review
    }
}
