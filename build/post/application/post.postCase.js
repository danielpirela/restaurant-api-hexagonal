"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUseCase = void 0;
const post_value_1 = require("../domain/post.value");
class PostUseCase {
    constructor(postRepository) {
        this.postRepository = postRepository;
        this.postRepository = postRepository;
    }
    getPostById(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield this.postRepository.getPost(uuid);
            return post;
        });
    }
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postRepository.getAllPosts();
            return posts;
        });
    }
    createPost({ title, content }) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = new post_value_1.PostValue({ title, content });
            const postCreated = yield this.postRepository.createPost(post);
            return postCreated;
        });
    }
    updatePost(uuid, title, content) {
        return __awaiter(this, void 0, void 0, function* () {
            const postUpdated = yield this.postRepository.editPost(uuid, title, content);
            return postUpdated;
        });
    }
    deletePost(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const postDeleted = yield this.postRepository.deletePost(uuid);
            return postDeleted;
        });
    }
}
exports.PostUseCase = PostUseCase;
