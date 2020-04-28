import { Router } from 'express';
import { comidaController } from '../controllers/comidaController';

class ComidasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', comidaController.list);
        this.router.get('/:id', comidaController.getOne);
        this.router.post('/', comidaController.create)
        this.router.put('/:id', comidaController.update);
        this.router.delete('/:id', comidaController.delete);
    }

}

const comidasRoutes = new ComidasRoutes();
export default comidasRoutes.router;