import { Read } from './Read';

interface IReadDataDTO {
  address: Read;
}

let prevTransactionID = 0;

export class ReadData {
  public data: boolean | string | number;
  public address: number;
  public bufferLenght: number;
  public byteCount: number;
  public buffer: Buffer;

  constructor({ address }: IReadDataDTO) {
    let transationID = 0;
    const protocolID = 0;

    if (address.address === 0) {
      this.address = 65535;
    } else {
      this.address = address.address - 1;
    }

    this.bufferLenght = 12;

    this.byteCount = this.bufferLenght - 6;

    this.buffer = Buffer.alloc(this.bufferLenght);

    this.buffer.writeUInt16BE(transationID, 0);
    this.buffer.writeUInt16BE(protocolID, 2);
    this.buffer.writeUInt16BE(this.byteCount, 4);
    this.buffer.writeUInt8(1, 6);
    this.buffer.writeUInt8(address.functionCodeRead, 7);
    this.buffer.writeUInt16BE(this.address, 8);
    this.buffer.writeUInt16BE(address.lenght, 10);
  }
}
