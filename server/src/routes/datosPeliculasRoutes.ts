import { Router } from 'express';
import { datosPeliculaController } from '../controllers/datosPeliculaController';

class DatosPeliculasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', datosPeliculaController.list);
        this.router.get('/:id', datosPeliculaController.listByMovie);
        this.router.post('/', datosPeliculaController.create)
        this.router.put('/:id', datosPeliculaController.update);
        this.router.delete('/:id', datosPeliculaController.delete);
    }

}

const datosPeliculasRoutes = new DatosPeliculasRoutes();
export default datosPeliculasRoutes.router;