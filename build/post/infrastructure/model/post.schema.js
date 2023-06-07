"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    uuid: { type: String, unique: true, require: true },
    title: { type: String },
    content: { type: String },
});
const postModel = (0, mongoose_1.model)('posts', PostSchema);
exports.default = postModel;
