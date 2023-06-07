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
const user_schema_1 = __importDefault(require("../model/user.schema"));
class MongoRepository {
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_schema_1.default.findOne({ email });
            return user;
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_schema_1.default.find();
            return user;
        });
    }
    getUser(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_schema_1.default.findOne({ uuid });
            return user;
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createUser(userIn) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_schema_1.default.create(userIn);
            return user;
        });
    }
    deleteUser(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_schema_1.default.findOneAndDelete({ uuid });
            return user;
        });
    }
    editUser(uuid, name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_schema_1.default.findOneAndUpdate({ uuid }, { name, email }, { new: true });
            return user;
        });
    }
}
exports.MongoRepository = MongoRepository;
