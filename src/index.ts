import express, { Request, Response } from 'express';
import { readFileSync } from 'fs';
import router from './controller';
import https from 'https';

const app = express();
const port = 443;

app.use(express.static('public'));
app.use('/', router);

const options = {
    key: readFileSync("./certs/INFO2222.test.key"),
    cert: readFileSync("./certs/INFO2222.test.crt")
}

const server = https.createServer(options, app);

server.listen(port, '127.0.01', () => {
    console.log("Server listening on https://127.0.0.1:443");
});