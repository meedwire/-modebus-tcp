export class Write {
  public readonly holdingRegisters?: number;
  public readonly coil?: number;
  public readonly discreteInput?: number;
  public readonly inputRegister?: number;
  public readonly functionCodeWrite?: number;
  public readonly functionCodeRead?: number;
  public readonly address?: number;
  public readonly lenght?: number;

  constructor(address: Write) {
    if (address.holdingRegisters) {
      this.address = address.holdingRegisters;
      this.functionCodeRead = 3;
      this.functionCodeWrite = 6;
      this.lenght = 1;
    }
  }
}
