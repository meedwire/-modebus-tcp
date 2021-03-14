import * as net from 'net';
import { IConnectData, TypeClient } from '../../types';
import { ConnectUseCase } from './ConnectUseCase';

export class ConnectController {
  constructor(private connectUseCase: ConnectUseCase) {}

  async handle(data: IConnectData): Promise<net.Socket> {
    const client = await this.connectUseCase.execute(data);

    return client;
  }
}
