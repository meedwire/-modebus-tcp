export class ParseResponse {
  public transactionID: number;
  public protocolID: number;
  public length: number;
  public unitID: number;
  public functionCode: number;
  public byteCount: number;
  public value: number;

  constructor(private readonly data: Buffer) {
    this.data = Buffer.from(this.data.toString(), "hex");

    this.transactionID = this.data.readUInt16BE(0);
    this.protocolID = this.data.readUInt16BE(2);
    this.length = this.data.readUInt16BE(4);
    this.unitID = this.data.readInt8(6);
    this.functionCode = this.data.readInt8(7);
    this.byteCount = Math.abs(this.data.readInt8(8));

    if (this.data.length > 9) {
      this.value = this.data.readIntBE(9, this.data.length - 9);
    }
  }
}
