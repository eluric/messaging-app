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
        data = html.toString();
        return;
    });
    return data;
};
const homePage = (request, response) => {
    const header = readHTMLFile(`${templatePath}/header.html`);
    const body = readHTMLFile(`${templatePath}/index.html`);
    const tail = readHTMLFile(`${templatePath}/tailer.html`);
    console.log(header);
    console.log(body);
    console.log(tail);
    response.setHeader("Content-Type", "text/html");
    response.send(`${header}${body}${tail}`);
};
router.get('/', homePage);
router.get('/home');
exports.default = router;
