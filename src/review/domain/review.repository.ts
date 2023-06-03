import { ReviewEntity } from './review.entity'

export interface ReviewRepository {
    getAllReviews(): Promise<ReviewEntity[] | null>
    getReview(uuid: string): Promise<ReviewEntity | null>,
    createReview(reviewIn: ReviewEntity): Promise<ReviewEntity | null>,
    deleteReview(uuid: string): Promise<ReviewEntity | null>,
    editReview(uuid: string, title: string, content: string): Promise<ReviewEntity | null>
}
