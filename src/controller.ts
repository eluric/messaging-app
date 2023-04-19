import express, { Response, Request } from 'express';
import fs, { readFile } from 'fs';

const templatePath = "./static/templates"

const router = express.Router();

const readHTMLFile = (filename: string): string => {
    let data = "";
    readFile(filename, (err, html) => {
        if (err) {
            console.error(err);
            return;
        } 

        data = html.toString();
        return;
    })

    return data;
}

const homePage = (request: Request, response: Response) => {
    const header = readHTMLFile(`${templatePath}/header.html`)
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

export default router;