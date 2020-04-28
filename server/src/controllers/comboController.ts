import { Request, Response } from 'express';
import pool from '../database';

class ComboController {
    
    public async list (req: Request, res: Response) {
        const combos = await pool.query('SELECT * FROM combos');
        res.json(combos);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const combo = await pool.query('SELECT * FROM combos WHERE id = ?', [id])
        if (combo.length > 0) {
            return res.json(combo[0])
        }
        res.status(404).json({text: 'The combo does not exists'})
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO combos set ?', [req.body])
        res.json({text: 'combo saved'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM combos WHERE id = ?', [id]);
        res.json({message: 'The combo was deleted'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE combos set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The combo was updated'});
    }
}

export const comboController = new ComboController();