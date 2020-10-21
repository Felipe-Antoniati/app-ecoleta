import { Router } from "express";
const routesRouters = Router();

import ItemsRouters from "./r_items";
import PointsRouters from "./r_points";

routesRouters
  .use("/", ItemsRouters)
  .use("/", PointsRouters)
;

export default routesRouters;