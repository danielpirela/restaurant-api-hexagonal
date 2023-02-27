import { UserEntity } from '../../domain/user.entity'
import { UserRepository } from '../../domain/user.repository'
import userModel from '../model/user.schema'

export class MongoRepository implements UserRepository {

    async getAllUsers(): Promise<UserEntity[] | null > {
        const user:UserEntity[] | null = await userModel.find()
        return user
    }
    async getUser(uuid: string): Promise<UserEntity | null> {
        const user:UserEntity | null = await userModel.findOne({ uuid })
        return user
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createUser(userIn: UserEntity): Promise<any> {
        const user = await userModel.create(userIn)
        return user
    }

    async deleteUser(uuid: string): Promise<UserEntity | null> {
        const user:UserEntity | null = await userModel.findOneAndDelete({uuid})
        return user
    }

    async editUser(uuid: string, name: string, email: string): Promise<UserEntity | null> {
        const user:UserEntity | null = await userModel.findOneAndUpdate({uuid}, {name, email}, {new:true})
        return user
    }
}
