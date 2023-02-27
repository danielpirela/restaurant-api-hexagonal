import {Schema, model} from 'mongoose'

const UserSchema = new Schema(
    {
        uuid: {type: String, unique: true, require: true},
        name:{type: String},
        email: {type: String}
    }
)
const userModel = model('users', UserSchema)

export default userModel
