import { TypeAddress } from '../types';

export interface IReadRepository {
  read: (address: TypeAddress) => Promise<number>;
}
