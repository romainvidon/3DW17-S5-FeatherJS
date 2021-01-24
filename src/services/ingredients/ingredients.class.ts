import { NullableId, Params } from '@feathersjs/feathers';
import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import { Application } from '../../declarations';

interface IngredientData {
  _id?: string;
  name: string;
  deletedAt: number;
}


export class Ingredients extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<MongooseServiceOptions>, app: Application) {
    super(options);
  }

  /*async get(id: number, params: Params){
    return JSON.stringify(params);
  }*/

  async remove(id: number, params: Params){
    
    const data = {
      deletedAt: new Date().toISOString()
    };
    const result = await this.patch(id, data, params);
    return result;
  }
}
