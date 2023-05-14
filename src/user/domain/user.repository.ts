import { UserEntity } from './user.entity'

export interface UserRepository {
    getUserByEmail(email: string): Promise<UserEntity | null>
    getAllUsers(): Promise<UserEntity[] | null>
    getUser(uuid: string): Promise<UserEntity | null>,
    createUser(userIn: UserEntity): Promise<UserEntity | null>,
    deleteUser(uuid: string): Promise<UserEntity | null>,
    editUser(uuid: string, name: string, email: string): Promise<UserEntity | null>
}
