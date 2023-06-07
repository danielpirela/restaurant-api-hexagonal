"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const user_route_1 = __importDefault(require("./infrastructure/routes/user.route"));
const db_1 = __importDefault(require("../utils/db"));
(0, db_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT_USER;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
// * routes
app.use(user_route_1.default);
app.listen(port, () => console.log(`Server on port ${port}`));
exports.default = app;
