import { UserEntity } from './user.entity'
import { v4 as uuid } from 'uuid'

export class UserValue implements UserEntity {
    uuid: string
    name: string
    email: string
    password: string

    constructor({
        name,
        email,
        password,
    }: {
        name: string
        email: string
        password: string
    }) {
        this.uuid = uuid()
        this.name = name
        this.email = email
        this.password = password
    }
}
