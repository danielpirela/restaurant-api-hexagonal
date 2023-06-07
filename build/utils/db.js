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
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const userName = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
console.log(userName);
console.log(password);
const uri = `mongodb+srv://${userName}:${password}@cluster0.k2key.mongodb.net/todo?retryWrites=true&w=majority`;
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose_1.default.set('strictQuery', false);
        const db = yield mongoose_1.default.connect(uri);
        console.log(`data base connected successfully ${db.connection.db.databaseName}`);
    }
    catch (err) {
        if (err instanceof Error)
            console.log(err);
    }
});
exports.default = dbConnection;
