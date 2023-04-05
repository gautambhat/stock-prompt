"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stocks_1 = __importDefault(require("./routes/stocks"));
const port = 9000;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send(`<h2>Hello, World!</h2>\n Actually, you...I see your IP is ${req.ip}. Listen up, now. I'm an API server, and I'd appreciate it if you call some of my REST methods instead.`);
});
app.use('/', stocks_1.default);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=app.js.map