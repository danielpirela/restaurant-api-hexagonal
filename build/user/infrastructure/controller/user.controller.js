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
exports.UserController = void 0;
class UserController {
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
        this.loginUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield this.userUseCase.loginUser(email);
            if ((user === null || user === void 0 ? void 0 : user.password) === password)
                return res.status(200).json(user);
            res.status(403).json();
        });
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = req.body;
            const user = yield this.userUseCase.register({ name, email, password });
            if (!user)
                return res.status(400);
            res.status(200).json(user);
        });
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userUseCase.getUsersProfiles();
            if (!users)
                return res.status(400);
            res.status(200).json(users);
        });
        this.getUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.userUseCase.getUserProfile(id);
            if (!user)
                return res.status(400);
            res.status(200).json(user);
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const { name, email } = req.body;
            const user = yield this.userUseCase.updateAccount(id, name, email);
            if (!user)
                return res.status(400);
            res.status(200).json(user);
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.userUseCase.deleteAccount(id);
            if (!user)
                return res.status(400);
            res.status(200).json(user);
        });
        this.userUseCase = userUseCase;
    }
}
exports.UserController = UserController;
