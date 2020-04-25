import { Request, Response } from 'express';
import pool from '../database';

class MoviesController {

    public async list (req: Request, res: Response) {
        const movies = await pool.query('SELECT * FROM peliculas');
        res.json(movies);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const movies = await pool.query('SELECT * FROM peliculas WHERE id = ?', [id])
        if (movies.length > 0) {
            return res.json(movies[0])
        }
        res.status(404).json({text: 'The movie does not exists'})
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO peliculas set ?', [req.body])
        res.json({text: 'Movie saved'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM peliculas WHERE id = ?', [id]);
        res.json({message: 'The movie was deleted'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE peliculas set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The movie was updated'});
    }

}

export const moviesController = new MoviesController();