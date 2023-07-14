import { ReviewEntity } from './review.entity'
import { v4 as uuid } from 'uuid'

export class ReviewValue implements ReviewEntity {
    uuid: string
    title: string
    content: string
    rating: number

    constructor({ title, content, rating }: { title: string, content: string, rating: number }) {
        this.uuid = uuid()
        this.title = title
        this.content = content
        this.rating = rating
    }
}
