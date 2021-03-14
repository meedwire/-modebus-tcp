import { connectController } from '../Connect';
import { IModBusDTO } from './ModBusDTO';

export class ModBusUseCase {
  constructor() {}

  async execute(data: IModBusDTO) {
    try {
      const client = await connectController.handle(data);

      return client;
    } catch (error) {
      console.log(error.message);
    }
  }
}
