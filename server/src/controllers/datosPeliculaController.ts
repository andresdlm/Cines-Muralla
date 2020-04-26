import { Request, Response } from 'express';
import pool from '../database';

class DatosPeliculaController {

    public async list (req: Request, res: Response) {
        const datosPelicula = await pool.query('SELECT datos_peliculas.id, datos_peliculas.id_pelicula, peliculas.nombre_pelicula, datos_peliculas.idioma, datos_peliculas.subtitulos, datos_peliculas.censura FROM datos_peliculas INNER JOIN peliculas ON datos_peliculas.id_pelicula = peliculas.id');
        res.json(datosPelicula);
    }

    public async listByMovie (req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const datos_pelicula = await pool.query('SELECT datos_peliculas.id, datos_peliculas.id_pelicula, peliculas.nombre_pelicula, datos_peliculas.idioma, datos_peliculas.subtitulos, datos_peliculas.censura FROM datos_peliculas INNER JOIN peliculas ON datos_peliculas.id_pelicula = peliculas.id WHERE datos_peliculas.id_pelicula = ?', [id])
        if (datos_pelicula.length > 0) {
            return res.json(datos_pelicula)
        }
        res.status(404).json({text: 'The data does not exists'})
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO datos_peliculas set ?', [req.body])
        res.json({text: 'Data saved'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM datos_peliculas WHERE id = ?', [id]);
        res.json({message: 'The Data was deleted'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('UPDATE datos_peliculas set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The Data was updated'});
    }
}

export const datosPeliculaController = new DatosPeliculaController();