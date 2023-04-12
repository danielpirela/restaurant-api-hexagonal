import { Request, Response } from 'express'
import { PostUseCase } from '../../application/post.postCase'

export class PostController {
    constructor(private postUseCase: PostUseCase) {
        this.postUseCase = postUseCase
    }

    public createPost = async (req: Request, res: Response) =>{
        const { title, content} = req.body
        const post =  await this.postUseCase.createPost({ title, content})

        if (!post) return res.status(400)
        res.status(200).json(post)
    }

    public getPosts = async (req: Request, res: Response) => {
        const posts = await this.postUseCase.getPosts()

        if (!posts) return res.status(400)
        res.status(200).json(posts)
    }

    public getPostById = async (req: Request, res: Response) => {

        const { id } = req.params
        const post = await this.postUseCase.getPostById(id)

        if (!post) return res.status(400)
        res.status(200).json(post)
    }

    public updatePost = async (req: Request, res: Response) =>{
        const { id } = req.params
        const { title, content } = req.body
        const post =  await this.postUseCase.updatePost(id, title, content)

        if (!post) return res.status(400)
        res.status(200).json(post)
    }

    public deletePost = async (req: Request, res: Response) =>{
        const { id } = req.params
        const post =  await this.postUseCase.deletePost(id)

        if (!post) return res.status(400)
        res.status(200).json(post)
    }
}
