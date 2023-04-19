import express, { Response, Request } from 'express';
import { readFile, readFileSync } from 'fs';
import https from 'https';

const app = express();

app.get('/', (request: Request, response: Response) => {
    const page = readFile('templates/header.html', (err, html) => {
        if (err) {
            response.status(500).send("Read failed.");
        }

        response.setHeader('Content-Type', 'text/html');
        response.send(html);
    });
});

const options = {
    passphrase: "1111",
    key: readFileSync("./certs/myCA.key"),
    cert: readFileSync("./certs/myCA.pem")
};

const server = https.createServer(options, app)

server.listen(443, '127.0.0.1', () => {
    console.log("Server listening on port 443.");
});