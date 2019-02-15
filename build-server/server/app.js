"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(function (req, res, next) {
    if (!req.url.startsWith('/api')) {
        res.sendFile(path_1.default.resolve(__dirname, '..', '..', 'build', 'index.html'));
    }
    else {
        next();
    }
});
exports.default = app;
//# sourceMappingURL=app.js.map