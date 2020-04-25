import { Request, Response } from 'express';
import pool from '../database';

class IndexController {

    index(req: Request, res: Response) {
        res.send('Hello')
    }

}

export const indexController = new IndexController();