import { IReadRepository } from '../../IReadRepository';
import * as net from 'net';
import { TypeAddress } from '../../../types';
import { ParseResponse } from '../../../entities/ParseResponse';
import { ReadData } from '../../../entities/ReadData';

export class ReadRepository implements IReadRepository {
  constructor(private client: net.Socket) {}
  async read(address: TypeAddress): Promise<number> {
    return new Promise((resolve, reject) => {
      const parsedData = new ReadData({ address });

      const writed = this.client.write(parsedData.buffer, (err) => {
        if (err) {
          console.log(err);
        }
      });

      this.client.on('data', (data) => {
        resolve(new ParseResponse(data).value);
      });
    });
  }
}
