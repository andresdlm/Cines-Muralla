import { Router } from 'express';
import { comboController } from '../controllers/comboController';

class CombosRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', comboController.list);
        this.router.get('/:id', comboController.getOne);
        this.router.post('/', comboController.create)
        this.router.put('/:id', comboController.update);
        this.router.delete('/:id', comboController.delete);
    }

}

const combosRoutes = new CombosRoutes();
export default combosRoutes.router;