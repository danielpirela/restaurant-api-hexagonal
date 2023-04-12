import { PostEntity } from '../../domain/post.entity'
import { PostRepository } from '../../domain/post.repository'
import postModel from '../model/post.schema'

export class MongoRepository implements PostRepository {

    async getAllPosts(): Promise<PostEntity[] | null > {
        const post:PostEntity[] | null = await postModel.find()
        return post
    }
    async getPost(uuid: string): Promise<PostEntity | null> {
        const post:PostEntity | null = await postModel.findOne({ uuid })
        return post
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createPost(postIn: PostEntity): Promise<any> {
        const post = await postModel.create(postIn)
        return post
    }

    async deletePost(uuid: string): Promise<PostEntity | null> {
        const post:PostEntity | null = await postModel.findOneAndDelete({uuid})
        return post
    }

    async editPost(uuid: string, name: string, email: string): Promise<PostEntity | null> {
        const post:PostEntity | null = await postModel.findOneAndUpdate({uuid}, {name, email}, {new:true})
        return post
    }
}
