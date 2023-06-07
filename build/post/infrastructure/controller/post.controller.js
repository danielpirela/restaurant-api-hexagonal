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
exports.PostController = void 0;
class PostController {
    constructor(postUseCase) {
        this.postUseCase = postUseCase;
        this.createPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { title, content } = req.body;
            const post = yield this.postUseCase.createPost({ title, content });
            if (!post)
                return res.status(400);
            res.status(200).json(post);
        });
        this.getPosts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const posts = yield this.postUseCase.getPosts();
            if (!posts)
                return res.status(400);
            res.status(200).json(posts);
        });
        this.getPostById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const post = yield this.postUseCase.getPostById(id);
            if (!post)
                return res.status(400);
            res.status(200).json(post);
        });
        this.updatePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, content } = req.body;
            const post = yield this.postUseCase.updatePost(id, title, content);
            if (!post)
                return res.status(400);
            res.status(200).json(post);
        });
        this.deletePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const post = yield this.postUseCase.deletePost(id);
            if (!post)
                return res.status(400);
            res.status(200).json(post);
        });
        this.postUseCase = postUseCase;
    }
}
exports.PostController = PostController;
