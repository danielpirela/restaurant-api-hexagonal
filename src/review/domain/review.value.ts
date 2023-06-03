import { ReviewEntity } from './review.entity'
import { v4 as uuid } from 'uuid'

export class ReviewValue implements ReviewEntity {
    uuid: string
    title: string
    content: string

    constructor ({title, content}:{title: string, content: string}) {
        this.uuid = uuid()
        this.title = title
        this.content = content
    }
}
