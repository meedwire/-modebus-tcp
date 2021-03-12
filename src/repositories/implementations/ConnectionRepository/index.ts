import { Connection } from "../../../entities/Connection";
import { IConnectionRepository } from "../../IConnectionRepository";
import * as net from "net";

export class ConnectionRepository implements IConnectionRepository {
  constructor(private client: net.Socket) {}
  async connect(): Promise<Connection> {
    try {
      this.client.setEncoding("hex");

      this.client.connect({ port: 502, host: "192.168.100.151" });

      return this.client;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
