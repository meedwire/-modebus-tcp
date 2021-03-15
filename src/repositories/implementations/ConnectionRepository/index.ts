import { Connection } from "../../../entities/Connection";
import { IConnectionRepository } from "../../IConnectionRepository";
import * as net from "net";
import { IConnectData, TypeClient } from "../../../types";

export class ConnectionRepository implements IConnectionRepository {
  constructor(private client: net.Socket) {}

  onRecconection(data: IConnectData) {
    this.client.on("close", () => {
      setInterval(() => {
        if (!this.client.writable) {
          this.client.destroy();
          this.client.connect({ port: 502, host: data.ip });
        }
      }, 1000);
    });
  }

  async connect(data: IConnectData): Promise<net.Socket> {
    try {
      this.client = new net.Socket();
      this.client.setEncoding("hex");
      this.client.setKeepAlive(true, 5000);

      this.client.connect({ port: 502, host: data.ip });

      if (data.reconnection) this.onRecconection(data);

      this.client.on("connect", () => console.log("Client Connected"));

      this.client.on("error", (err) => {
        console.log(err.message);
      });

      return this.client;
    } catch (error) {
      console.log("Errorrrrr", error);
      //throw new Error(error.message);
    }
  }
}
