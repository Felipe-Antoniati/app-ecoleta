import { Router } from "express";
import { celebrate, Joi } from "celebrate";
import multer from "multer";
import multerConfig from "../config/multer";

import PointController from "../controllers/c_points";
const pointController = new PointController();

const PointsRouters = Router();
const upload = multer(multerConfig);

PointsRouters.get("/points", pointController.index)
  .get("/points/:id", pointController.show)
  .post(
    "/points",
    upload.single("image"),
    celebrate(
      {
        body: Joi.object().keys({
          name: Joi.string().required(),
          email: Joi.string().required().email(),
          whatsapp: Joi.number().required(),
          latitude: Joi.number().required(),
          longitude: Joi.number().required(),
          city: Joi.string().required(),
          uf: Joi.string().required().max(2),
          items: Joi.string().required(),
        }),
      },
      {
        abortEarly: false,
      }
    ),
    pointController.create
  );

export default PointsRouters;
