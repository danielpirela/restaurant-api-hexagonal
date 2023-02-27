import { UserRepository } from '../domain/user.repository'
import { UserValue } from '../domain/user.value'

export class UserUseCase {
    constructor(private readonly userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    public async getUserProfile (uuid: string) {
        const user = await this.userRepository.getUser(uuid)
        return user
    }

    public async getUsersProfiles () {
        const users = await this.userRepository.getAllUsers()
        return users
    }

    public async register({ name, email }: { name: string, email: string }) {
        const user = new UserValue({ name, email })
        const userCreated = await this.userRepository.createUser(user)
        return userCreated
    }

    public async updateAccount (uuid: string, name: string, email: string) {
        const userUpdated = await this.userRepository.editUser(uuid, name, email)
        return userUpdated
    }

    public async deleteAccount (uuid: string) {
        const userDeleted = await this.userRepository.deleteUser(uuid)
        return userDeleted
    }
}
