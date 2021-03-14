import { IModBusDTO } from './ModBusDTO';
import { ModBusUseCase } from './ModBusUseCase';
import * as net from 'net';
import { TypeClient } from '../../types';
import { Client } from '../Client';

export class ModBusController {
  private client?: net.Socket;
  constructor(private modbusUseCase: ModBusUseCase) {}

  async connect(data: IModBusDTO) {
    try {
      this.client = await this.modbusUseCase.execute(data);

      return new Client(this.client);
    } catch (error) {
      console.log(error.message);
    }
  }
}
