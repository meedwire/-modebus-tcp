import { Write } from './Write';

interface IWriteDataDTO {
  data: number;
  address: Write;
}

let prevTransactionID = 500;

function getTransactionId() {
  if (prevTransactionID > 999) {
    prevTransactionID = 500;
  }
  return prevTransactionID++;
}

export class WriteData {
  public data: boolean | string | number;
  public address: number;
  public bufferLenght: number;
  public byteCount: number;
  public buffer: Buffer;

  constructor({ address, data }: IWriteDataDTO) {
    let transationID = getTransactionId();
    const protocolID = 0;

    if (typeof data === 'boolean' && data === true) {
      data = 1;
    } else if (typeof data === 'boolean' && data === false) {
      data = 0;
    }

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
    this.buffer.writeUInt8(address.functionCodeWrite, 7);
    this.buffer.writeUInt16BE(this.address, 8);

    this.buffer.writeUInt16BE(data, 10);
  }
}
