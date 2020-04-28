import { Router } from 'express';
import { funcionController } from '../controllers/funcionController';

class FuncionesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', funcionController.list);
        this.router.get('/:id', funcionController.getOne);
        this.router.post('/', funcionController.create)
        this.router.put('/:id', funcionController.update);
        this.router.delete('/:id', funcionController.delete);
    }

}

const funcionesRoutes = new FuncionesRoutes();
export default funcionesRoutes.router;