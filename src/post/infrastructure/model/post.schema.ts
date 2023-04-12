import {Schema, model} from 'mongoose'

const PostSchema = new Schema(
    {
        uuid: {type: String, unique: true, require: true},
        title:{type: String},
        content: {type: String},
    }
)
const postModel = model('posts', PostSchema)

export default postModel
