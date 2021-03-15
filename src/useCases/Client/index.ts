import * as net from "net";
import { WriteData } from "../../entities/WriteData";
import { ReadRepository } from "../../repositories/implementations/ReadRepository";
import { WriteRepository } from "../../repositories/implementations/WriteRepository";
import { TypeAddress } from "../../types";
import { ReadController } from "../Read/ReadController";
import { ReadUseCase } from "../Read/ReadUseCase";
import { WriteController } from "../Write/WriteController";
import { WriteUseCase } from "../Write/WriteUseCase";
export class Client {
  constructor(private client: net.Socket) {}

  async write(address: TypeAddress, data: number) {
    const writeRepository = new WriteRepository(this.client);

    const writeUseCase = new WriteUseCase(writeRepository);

    const writeController = new WriteController(writeUseCase);

    return await writeController.handle(address, data);
  }

  async read(address: TypeAddress) {
    const readRepository = new ReadRepository(this.client);

    const readUseCase = new ReadUseCase(readRepository);

    const readController = new ReadController(readUseCase);

    return await readController.handle(address);
  }

  onChange(address: TypeAddress, callBack: (value: number) => void) {}
}
