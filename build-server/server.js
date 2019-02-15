"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./server/app"));
app_1.default.set('port', process.env.PORT || 3000);
app_1.default.set('trust proxy', true);
app_1.default.listen(app_1.default.get('port'), (err) => {
    if (err)
        throw err;
    console.log(`> Ready on http://localhost:${app_1.default.get('port')}`);
});
//# sourceMappingURL=server.js.map