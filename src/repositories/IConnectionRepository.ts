import * as net from 'net';
import { IConnectData } from '../types';

export interface IConnectionRepository {
  connect: (dataConnection: IConnectData) => Promise<net.Socket>;
}
