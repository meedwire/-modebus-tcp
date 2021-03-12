import { Socket } from "node:dgram";
import { Connection } from "../entities/Connection";

export interface IConnectionRepository {
  connect: () => Promise<Socket>;
}
