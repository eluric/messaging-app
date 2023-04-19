import express, { Request, Response } from 'express';
import https from 'https';

const app = express();
const port = 443;

const options = {
    passphrase: "1111",
    key: "./certs/myCA.key",
    cert: "./myCA.pem"
}

const server = https.createServer(options, app);

server.listen(port, '127.0.01', () => {
    console.log("Server listening on 127.0.0.1:443");
});