import { Socket } from "node:dgram";
import { ConnectUseCase } from "./ConnectUseCase";

export class ConnectController {
  constructor(private connectUseCase: ConnectUseCase) {}

  async handle(): Promise<Socket> {
    const client = await this.connectUseCase.execute();

    return client;
  }
}
