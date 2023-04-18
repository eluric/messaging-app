"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const https_1 = __importDefault(require("https"));
const app = (0, express_1.default)();
app.get('/', (request, response) => {
    const page = (0, fs_1.readFile)('templates/header.html', (err, html) => {
        if (err) {
            response.status(500).send("Read failed.");
        }
        response.setHeader('Content-Type', 'text/html');
        response.send(html);
    });
});
const options = {
    passphrase: "1111",
    key: (0, fs_1.readFileSync)("./certs/myCA.key"),
    cert: (0, fs_1.readFileSync)("./certs/myCA.pem")
};
// app.listen(443, () => console.log("App available on http://localhost:443"));
const server = https_1.default.createServer(options, app);
server.listen(443, '127.0.0.1', () => {
    console.log("Server listening on port 443.");
});
