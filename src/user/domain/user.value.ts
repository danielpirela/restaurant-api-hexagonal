import { UserEntity } from './user.entity'
import { v4 as uuid } from 'uuid'

export class UserValue implements UserEntity {
    uuid: string
    name: string
    email: string

    constructor ({name, email}:{name: string, email: string}){
        this.uuid = uuid()
        this.name = name
        this.email = email
    }
}
