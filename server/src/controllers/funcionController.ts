import { Request, Response } from 'express';
import pool from '../database';

class FuncionController {

    public async list (req: Request, res: Response) {
        const funciones = await pool.query('SELECT peliculas.nombre_pelicula, salas.numero_sala, salas.tecnologia, salas.tipo_sala, sedes.nombre_fiscal, datos_peliculas.idioma, datos_peliculas.subtitulos, datos_peliculas.censura FROM funciones INNER JOIN datos_peliculas on funciones.id_datos_pelicula = datos_peliculas.id INNER JOIN salas on funciones.id_sala = salas.id INNER JOIN peliculas on datos_peliculas.id_pelicula = peliculas.id INNER JOIN sedes on salas.id_sede = sedes.id');
        res.json(funciones);
    }
    
    public async getOne (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const funcion = await pool.query('SELECT peliculas.nombre_pelicula, salas.numero_sala, salas.tecnologia, salas.tipo_sala, sedes.nombre_fiscal, datos_peliculas.idioma, datos_peliculas.subtitulos, datos_peliculas.censura FROM funciones INNER JOIN datos_peliculas on funciones.id_datos_pelicula = datos_peliculas.id INNER JOIN salas on funciones.id_sala = salas.id INNER JOIN peliculas on datos_peliculas.id_pelicula = peliculas.id INNER JOIN sedes on salas.id_sede = sedes.id WHERE funciones.id = ?', [id])
        if (funcion.length > 0) {
            return res.json(funcion[0])
        }
        res.status(404).json({text: 'The funcion does not exists'})
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO funciones set ?', [req.body])
        res.json({text: 'funcion saved'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM funciones WHERE id = ?', [id]);
        res.json({message: 'The funcion was deleted'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE funciones set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The funcion was updated'});
    }

}

export const funcionController = new FuncionController();