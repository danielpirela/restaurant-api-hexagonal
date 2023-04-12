import { PostEntity } from './post.entity'
import { v4 as uuid } from 'uuid'

export class PostValue implements PostEntity {
    uuid: string
    title: string
    content: string

    constructor ({title, content}:{title: string, content: string}) {
        this.uuid = uuid()
        this.title = title
        this.content = content
    }
}
