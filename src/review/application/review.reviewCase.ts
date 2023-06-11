import { ReviewRepository } from '../domain/review.repository'
import { ReviewValue } from '../domain/review.value'

export class ReviewUseCase {
    constructor(private readonly reviewRepository: ReviewRepository) {
        this.reviewRepository = reviewRepository
    }

    public async getReviewById (uuid: string) {
        const review = await this.reviewRepository.getReview(uuid)
        return review
    }

    public async getAllReviews () {
        const reviews = await this.reviewRepository.getAllReviews()
        return reviews
    }

    public async getReviews (offset: number , limit: number) {
        const reviews = await this.reviewRepository.getReviews(offset, limit)
        return reviews
    }

    public async createReview({ title, content}: { title: string, content: string}) {
        const review = new ReviewValue({ title, content })
        const reviewCreated = await this.reviewRepository.createReview(review)
        return reviewCreated
    }

    public async updateReview (uuid: string, title: string, content: string) {
        const reviewUpdated = await this.reviewRepository.editReview(uuid, title, content)
        return reviewUpdated
    }

    public async deleteReview (uuid: string) {
        const reviewDeleted = await this.reviewRepository.deleteReview(uuid)
        return reviewDeleted
    }
}
