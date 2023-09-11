import { Schema, model } from 'mongoose'

const ReviewSchema = new Schema({
    uuid: { type: String, unique: true, require: true },
    title: { type: String },
    content: { type: String },
    rating: { type: Number},
    userId:{ type: String, require: true, unique: false }
})
const reviewModel = model('reviews', ReviewSchema)

export default reviewModel
