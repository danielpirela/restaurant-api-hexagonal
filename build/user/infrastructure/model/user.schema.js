"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    uuid: { type: String, unique: true, require: true },
    name: { type: String },
    email: { type: String },
    password: { type: String, required: true }
});
const userModel = (0, mongoose_1.model)('users', UserSchema);
exports.default = userModel;
