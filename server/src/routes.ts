import { Router } from 'express';
import multer from 'multer'
import multerConfig from './config/multer';
import {celebrate, Joi} from 'celebrate'

const routes = Router();
const upload = multer(multerConfig);

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
  .get('/points', pointController.index)
  .get('/points/:id', pointController.show)
  .post(
    '/points', 
    upload.single('image'),  
    celebrate({
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      })
    }, {
      abortEarly: false
    }),
    pointController.create
  );

export default routes;

