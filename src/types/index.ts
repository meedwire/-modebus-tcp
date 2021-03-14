export interface TypeAddress {
  holdingRegisters?: number;
  coil?: number;
  discreteInput?: number;
  inputRegister?: number;
}

export interface TypeClient {
  write: (address: TypeAddress) => void;
  read: () => void;
}

export interface IConnectData {
  ip: string;
  reconnection?: boolean;
}
