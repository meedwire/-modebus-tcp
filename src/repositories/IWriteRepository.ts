import { Write } from '../entities/Write';

export interface IWriteRepository {
  write: (
    address: Omit<Write, 'functionCodeWrite' | 'functionCodeRead' | 'address'>,
    data: number
  ) => Promise<boolean>;
}
