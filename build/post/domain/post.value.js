"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostValue = void 0;
const uuid_1 = require("uuid");
class PostValue {
    constructor({ title, content }) {
        this.uuid = (0, uuid_1.v4)();
        this.title = title;
        this.content = content;
    }
}
exports.PostValue = PostValue;
