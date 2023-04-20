import express, { Response, Request } from 'express';

const router = express.Router();

router.get('/', (request: Request, response: Response) => {

    response.render('home', { loggedIn: true });
});

export default router;