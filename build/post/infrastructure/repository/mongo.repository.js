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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRepository = void 0;
const post_schema_1 = __importDefault(require("../model/post.schema"));
class MongoRepository {
    getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_schema_1.default.find();
            return post;
        });
    }
    getPost(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_schema_1.default.findOne({ uuid });
            return post;
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createPost(postIn) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_schema_1.default.create(postIn);
            return post;
        });
    }
    deletePost(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_schema_1.default.findOneAndDelete({ uuid });
            return post;
        });
    }
    editPost(uuid, name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_schema_1.default.findOneAndUpdate({ uuid }, { name, email }, { new: true });
            return post;
        });
    }
}
exports.MongoRepository = MongoRepository;
