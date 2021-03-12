import { Socket } from "node:dgram";
import { IConnectionRepository } from "../../repositories/IConnectionRepository";

export class ConnectUseCase {
  constructor(private connectionRepository: IConnectionRepository) {}

  async execute(): Promise<Socket> {
    const client = await this.connectionRepository.connect();

    return client;
  }
}
