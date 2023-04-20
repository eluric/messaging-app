"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const controller_1 = __importDefault(require("./controller"));
const https_1 = __importDefault(require("https"));
const app = (0, express_1.default)();
const port = 443;
app.use(express_1.default.static('public'));
app.set('view engine', 'ejs');
app.use('/', controller_1.default);
const options = {
    key: (0, fs_1.readFileSync)("./certs/INFO2222.test.key"),
    cert: (0, fs_1.readFileSync)("./certs/INFO2222.test.crt")
};
const server = https_1.default.createServer(options, app);
server.listen(port, '127.0.01', () => {
    console.log("Server listening on https://127.0.0.1:443");
});
