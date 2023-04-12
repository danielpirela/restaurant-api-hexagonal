import { PostEntity } from './post.entity'

export interface PostRepository {
    getAllPosts(): Promise<PostEntity[] | null>
    getPost(uuid: string): Promise<PostEntity | null>,
    createPost(postIn: PostEntity): Promise<PostEntity | null>,
    deletePost(uuid: string): Promise<PostEntity | null>,
    editPost(uuid: string, title: string, content: string): Promise<PostEntity | null>
}
