import { Request, Response } from 'express';
import pool from '../database';

class SalaController {

    public async list (req: Request, res: Response) {
        const salas = await pool.query('SELECT * FROM salas');
        res.json(salas);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const salas = await pool.query('SELECT * FROM salas WHERE id = ?', [id])
        if (salas.length > 0) {
            return res.json(salas[0])
        }
        res.status(404).json({text: 'The sala does not exists'})
    }

    public async getBySede (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const salas = await pool.query('SELECT salas.id, salas.id_sede, salas.tipo_sala, salas.tecnologia, sedes.nombre_fiscal, salas.numero_sala FROM salas INNER JOIN sedes ON salas.id_sede = sedes.id WHERE salas.id_sede = ?', [id])
        res.json(salas);
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO salas set ?', [req.body])
        res.json({text: 'sala saved'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM salas WHERE id = ?', [id]);
        res.json({message: 'The sala was deleted'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE sala set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The sala was updated'});
    }

}

export const salaController = new SalaController();