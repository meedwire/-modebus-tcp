import { TypeAddress } from '../../../types';
import * as net from 'net';
import { IOnChangeRepository } from '../../IOnChangeRepository';
import { Client } from '../../../useCases/Client';

export class OnchangeRepository implements IOnChangeRepository {
  constructor(private client: net.Socket) {}
  async onChange(address: TypeAddress, callback: (value: number) => void) {
    const client = new Client(this.client);
    let prevValue: number;

    this.client.setMaxListeners(999999);

    setInterval(() => {
      client.read(address).then((value) => {
        if (prevValue !== value) {
          prevValue = value;
          callback(value);
        }
      });
    }, 500);
  }
}
