import { Router } from 'express';
const routes = Router();

// Controllers
import ItemController from './controllers/ItemController';
import PointController from './controllers/PointController';

// Class Controllers
const pointController = new PointController();
const itemController = new ItemController();

// Routes of CRUD Collection Items
routes.get('/items', itemController.index);

// Routes of CRUD Collection Points
routes
  .post('/points', pointController.create)
  .get('/points', pointController.index)
  .get('/points/:id', pointController.show);

export default routes;

