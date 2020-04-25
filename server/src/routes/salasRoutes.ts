import { Router } from 'express';
import { salaController } from '../controllers/salaController';

class SalasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', salaController.list);
        this.router.get('/:id', salaController.getOne);
        this.router.get('/sede/:id', salaController.getBySede);
        this.router.post('/', salaController.create)
        this.router.put('/:id', salaController.update);
        this.router.delete('/:id', salaController.delete);
    }

}

const salasRoutes = new SalasRoutes();
export default salasRoutes.router;