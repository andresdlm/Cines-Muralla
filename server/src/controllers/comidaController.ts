import { Request, Response } from 'express';
import pool from '../database';

class ComidaController {

    public async list (req: Request, res: Response) {
        const comidas = await pool.query('SELECT * FROM comidas');
        res.json(comidas);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const comida = await pool.query('SELECT * FROM comidas WHERE id = ?', [id])
        if (comida.length > 0) {
            return res.json(comida[0])
        }
        res.status(404).json({text: 'The comida does not exists'})
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO comidas set ?', [req.body])
        res.json({text: 'comida saved'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM comidas WHERE id = ?', [id]);
        res.json({message: 'The comida was deleted'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE comidas set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The comida was updated'});
    }

}

export const comidaController = new ComidaController();