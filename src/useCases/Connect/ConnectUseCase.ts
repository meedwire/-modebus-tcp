import * as net from 'net';
import { IConnectionRepository } from '../../repositories/IConnectionRepository';
import { IConnectData, TypeClient } from '../../types';

export class ConnectUseCase {
  constructor(private connectionRepository: IConnectionRepository) {}

  async execute(data: IConnectData): Promise<net.Socket> {
    console.log(data);
    const client = await this.connectionRepository.connect(data);

    return client;
  }
}
