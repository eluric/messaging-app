import express, { Request, Response } from 'express';
import { readFileSync } from 'fs';
import router from './controller';
import https from 'https';

const app = express();
const port = 443;

app.use('/', router);

const options = {
    passphrase: "1111",
    key: readFileSync("./certs/myCA.key"),
    cert: readFileSync("./certs/myCA.pem")
}

const server = https.createServer(options, app);

server.listen(port, '127.0.01', () => {
    console.log("Server listening on 127.0.0.1:443");
});