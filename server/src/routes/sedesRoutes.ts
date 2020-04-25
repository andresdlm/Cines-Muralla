import { Router } from 'express';
import { sedesController } from '../controllers/sedeController';

class SedesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', sedesController.list);
        this.router.get('/:id', sedesController.getOne);
        this.router.post('/', sedesController.create)
        this.router.put('/:id', sedesController.update);
        this.router.delete('/:id', sedesController.delete);
    }

}

const sedesRoutes = new SedesRoutes();
export default sedesRoutes.router;