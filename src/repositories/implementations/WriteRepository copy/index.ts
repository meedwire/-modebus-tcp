import { Write } from '../../../entities/Write';
import { IWriteRepository } from '../../IWriteRepository';
import * as net from 'net';
import { WriteData } from '../../../entities/WriteData';
import { TypeAddress } from '../../../types';
import { ParseResponse } from '../../../entities/ParseResponse';

export class WriteRepository implements IWriteRepository {
  constructor(private client: net.Socket) {}
  async write(address: TypeAddress, data: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const parsedData = new WriteData({ address, data });

      const writed = this.client.write(parsedData.buffer, (err) => {
        if (err) {
          console.log(err);
        }
      });

      this.client.on('data', (data) => {
        resolve(true);
        console.log(
          `${new Date().toLocaleTimeString(
            'pt-BR'
          )}:${new Date().getMilliseconds()}`,
          'writed',
          new ParseResponse(data)
        );
      });

      return writed;
    });
  }
}
