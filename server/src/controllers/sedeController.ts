import { Request, Response } from 'express';
import pool from '../database';

class SedesController {

    public async list (req: Request, res: Response) {
        const sedes = await pool.query('SELECT * FROM sedes');
        res.json(sedes);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const sedes = await pool.query('SELECT * FROM sedes WHERE id = ?', [id])
        if (sedes.length > 0) {
            return res.json(sedes[0])
        }
        res.status(404).json({text: 'The sede does not exists'})
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO sedes set ?', [req.body])
        res.json({text: 'Sede saved'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM sedes WHERE id = ?', [id]);
        res.json({message: 'The sede was deleted'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE sede set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The sede was updated'});
    }

}

export const sedesController = new SedesController();