import * as net from 'net';
import { WriteData } from '../../entities/WriteData';
import { WriteRepository } from '../../repositories/implementations/WriteRepository';
import { TypeAddress } from '../../types';
import { WriteController } from '../Write/WriteController';
import { WriteUseCase } from '../Write/WriteUseCase';
export class Client {
  constructor(private client: net.Socket) {}

  async write(address: TypeAddress, data: number) {
    const writeRepository = new WriteRepository(this.client);

    const writeUseCase = new WriteUseCase(writeRepository);

    const writeController = new WriteController(writeUseCase);

    await writeController.handle(address, data);
  }

  async read(address: TypeAddress) {}
}
