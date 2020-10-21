import { Request, Response } from "express";
import knex from "../database/connection";

class ItemController {
  async index(req: Request, res: Response) {
    const items = await knex("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.15.8:5000/uploads/${item.image}`,
        //O endereço IP da sua máquina pode mudar fique atento a este fator!
      };
    });
    return res.json(serializedItems);
  }
}

export default ItemController;
