import { Router } from "express";

import ItemController from "../controllers/c_items";
const itemController = new ItemController();

const itemRouter = Router();

itemRouter.get("/items", itemController.index);

export default itemRouter;
