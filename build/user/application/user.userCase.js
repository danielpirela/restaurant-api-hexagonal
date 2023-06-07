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
exports.UserUseCase = void 0;
const user_value_1 = require("../domain/user.value");
class UserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.userRepository = userRepository;
    }
    loginUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.getUserByEmail(email);
            return user;
        });
    }
    getUserProfile(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.getUser(uuid);
            return user;
        });
    }
    getUsersProfiles() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.getAllUsers();
            return users;
        });
    }
    register({ name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_value_1.UserValue({ name, email, password });
            const userCreated = yield this.userRepository.createUser(user);
            return userCreated;
        });
    }
    updateAccount(uuid, name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userUpdated = yield this.userRepository.editUser(uuid, name, email);
            return userUpdated;
        });
    }
    deleteAccount(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDeleted = yield this.userRepository.deleteUser(uuid);
            return userDeleted;
        });
    }
}
exports.UserUseCase = UserUseCase;
