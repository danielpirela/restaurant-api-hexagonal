import { ReviewEntity } from './review.entity'
import { v4 as uuid } from 'uuid'

export class ReviewValue implements ReviewEntity {
    uuid: string
    title: string
    content: string
    rating: number
    userId: string

    constructor({
        title,
        content,
        rating,
        userId,
    }: {
        title: string
        content: string
        rating: number
        userId: string
    }) {
        {
            this.uuid = uuid()
            this.title = title
            this.content = content
            this.rating = rating
            this.userId = userId
        }
    }
}
