<<<<<<< HEAD
import { ReviewEntity } from './review.entity'

export interface ReviewRepository {
    getAllReviews(): Promise<ReviewEntity[] | null>
    getReview(uuid: string): Promise<ReviewEntity | null>,
    getReviews( offset: number, limit: number): Promise<ReviewEntity[] | null>
    createReview(reviewIn: ReviewEntity): Promise<ReviewEntity | null>,
    deleteReview(uuid: string): Promise<ReviewEntity | null>,
    editReview(uuid: string, title: string, content: string): Promise<ReviewEntity | null>
}
=======
import { ReviewEntity } from './review.entity'

export interface ReviewRepository {
    getAllReviews(): Promise<ReviewEntity[] | null>
    getReview(uuid: string): Promise<ReviewEntity | null>
    createReview(reviewIn: ReviewEntity): Promise<ReviewEntity | null>
    deleteReview(uuid: string): Promise<ReviewEntity | null>
    editReview(
        uuid: string,
        title: string,
        content: string
    ): Promise<ReviewEntity | null>
}
>>>>>>> 452c12968e773914fdb978a569c50051cf4fb598
