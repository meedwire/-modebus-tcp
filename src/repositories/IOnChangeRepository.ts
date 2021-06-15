import { TypeAddress } from "../types";

export interface IOnChangeRepository {
  onChange: (address: TypeAddress, callback: (value: number) => void) => void;
}
