"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const templatePath = "./static/templates";
const router = express_1.default.Router();
const readHTMLFile = (filename) => {
    let data = "";
    (0, fs_1.readFile)(filename, (err, html) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(html.toString());
        data = html.toString();
        console.log(data);
    });
    return data;
};
const homePage = (request, response) => {
    // const header = readHTMLFile(`${templatePath}/header.html`);
    // const body = readHTMLFile(`${templatePath}/index.html`);
    // const tail = readHTMLFile(`${templatePath}/tailer.html`);
    const header = (0, fs_1.readFileSync)(`${templatePath}/header.html`).toString();
    const body = (0, fs_1.readFileSync)(`${templatePath}/index.html`).toString();
    const tail = (0, fs_1.readFileSync)(`${templatePath}/tailer.html`).toString();
    response.setHeader("Content-Type", "text/html");
    response.send(`${header}${body}`);
    response.end(tail);
};
router.get('/', homePage);
router.get('/home', homePage);
exports.default = router;
