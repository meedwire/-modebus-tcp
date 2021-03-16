import { Write } from '../../entities/Write';
import { IOnChangeRepository } from '../../repositories/IOnChangeRepository';
import { TypeAddress } from '../../types';

export class OnChangeUseCase {
  constructor(private writeRepository: IOnChangeRepository) {}

  execute(address: TypeAddress, callback: (value: number) => void) {
    this.writeRepository.onChange(address, callback);
  }
}
