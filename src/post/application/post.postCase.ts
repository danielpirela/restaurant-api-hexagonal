import { PostRepository } from '../domain/post.repository'
import { PostValue } from '../domain/post.value'

export class PostUseCase {
    constructor(private readonly postRepository: PostRepository) {
        this.postRepository = postRepository
    }

    public async getPostById (uuid: string) {
        const post = await this.postRepository.getPost(uuid)
        return post
    }

    public async getPosts () {
        const posts = await this.postRepository.getAllPosts()
        return posts
    }

    public async createPost({ title, content}: { title: string, content: string}) {
        const post = new PostValue({ title, content })
        const postCreated = await this.postRepository.createPost(post)
        return postCreated
    }

    public async updatePost (uuid: string, title: string, content: string) {
        const postUpdated = await this.postRepository.editPost(uuid, title, content)
        return postUpdated
    }

    public async deletePost (uuid: string) {
        const postDeleted = await this.postRepository.deletePost(uuid)
        return postDeleted
    }
}
