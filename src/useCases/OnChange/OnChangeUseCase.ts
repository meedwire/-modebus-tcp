import { Write } from '../../entities/Write';
import { IWriteRepository } from '../../repositories/IWriteRepository';
import { TypeAddress } from '../../types';

export class OnChangeUseCase {
  constructor(private writeRepository: IWriteRepository) {}

  async execute(address: TypeAddress, data: number) {
    const parsedAddress = new Write(address);

    const success = await this.writeRepository.write(parsedAddress, data);

    return success;
  }
}
