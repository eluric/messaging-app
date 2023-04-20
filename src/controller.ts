import express, { Response, Request } from 'express';
import fs, { readFile, readFileSync } from 'fs';

const templatePath = "./static/templates"

const router = express.Router();

const readHTMLFile = (filename: string): string => {
    let data = "";
    
    readFile(filename, (err, html) => {
        if (err) {
            console.error(err);
            return;
        } 
        
        console.log(html.toString());
        data = html.toString();
        console.log(data);
    });

    return data;
}

const homePage = (request: Request, response: Response) => {
    // const header = readHTMLFile(`${templatePath}/header.html`);
    // const body = readHTMLFile(`${templatePath}/index.html`);
    // const tail = readHTMLFile(`${templatePath}/tailer.html`);
    const header = readFileSync(`${templatePath}/header.html`).toString();
    const body = readFileSync(`${templatePath}/index.html`).toString();
    const tail = readFileSync(`${templatePath}/tailer.html`).toString();

    response.setHeader("Content-Type", "text/html");
    response.send(`${header}${body}`);
    response.end(tail);
};

router.get('/', homePage);
router.get('/home', homePage);

export default router;