import { Request, Response } from 'express'
import { UserUseCase } from '../../application/user.userCase'

export class UserController {
    constructor(private userUseCase: UserUseCase) {
        this.userUseCase = userUseCase
    }

    public createUser = async (req: Request, res: Response) =>{
        const { name, email } = req.body
        const user =  await this.userUseCase.register({ name, email })

        if (!user) return res.status(400)
        res.status(200).json(user)
    }

    public getUsers = async (req: Request, res: Response) => {
        const users = await this.userUseCase.getUsersProfiles()

        if (!users) return res.status(400)
        res.status(200).json(users)
    }

    public getUserById = async (req: Request, res: Response) => {

        const { id } = req.params
        const user = await this.userUseCase.getUserProfile(id)

        if (!user) return res.status(400)
        res.status(200).json(user)
    }

    public updateUser = async (req: Request, res: Response) =>{
        const { id } = req.params
        console.log(id)
        const { name, email } = req.body
        const user =  await this.userUseCase.updateAccount(id, name, email)

        if (!user) return res.status(400)
        res.status(200).json(user)
    }

    public deleteUser = async (req: Request, res: Response) =>{
        const { id } = req.params
        const user =  await this.userUseCase.deleteAccount(id)

        if (!user) return res.status(400)
        res.status(200).json(user)
    }
}
