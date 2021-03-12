import { ConnectionRepository } from "../../repositories/implementations/ConnectionRepository";
import { ConnectController } from "./ConnectController";
import { ConnectUseCase } from "./ConnectUseCase";
import * as net from "net";

const connectionRepository = new ConnectionRepository(new net.Socket());

const connectUseCase = new ConnectUseCase(connectionRepository);

const connectController = new ConnectController(connectUseCase);

export { connectController, connectUseCase };
