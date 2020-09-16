import {Request, Response} from 'express';
import knex from '../database/connection';


class PointController {

  async create(req: Request , res: Response) {
    const {
      name, email, whatsapp, latitude, longitude, city, uf, items
    } = req.body;
    
    const trx = await knex.transaction();
    
    const insertedIds = await trx('points').insert({
      image: 'https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      name, 
      email, 
      whatsapp, 
      latitude, 
      longitude, 
      city, 
      uf, 
    });
  
    const point_id = insertedIds[0]
    
    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id
      }
    });
    
    await trx('point_items').insert(pointItems);

    await trx.commit();
    
    return res.status(201).json({
      success: "Collection Point Created!"
    });
    
  };

  async index(req: Request, res: Response) {
    const { city, uf, items } = req. query;
  
    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim())
    );

    const points = await knex ('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_Items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*')
    ;
    
    return res.json(points);
  };

  async show(req: Request, res: Response) {
    
    const {id} = req.params;

    const point = knex('points')
      .where('id', id)
      .first()
    ;

    if (!point) {
      return res.json({
        message: "Point Not Found."
      });
    };

    const items = knex('items')
      .join('point_items', 'items.id', '=', 'point_items.items_id')
      .where('point_items.point_id', id)
      .select('items.title')
    ;

    return res.json( {
      point, items
    });

  };

};

export default PointController;