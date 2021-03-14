import { Read } from '../../entities/Read';
import { IReadRepository } from '../../repositories/IReadRepository';
import { TypeAddress } from '../../types';

export class ReadUseCase {
  constructor(private readRepository: IReadRepository) {}

  async execute(address: TypeAddress) {
    const parsedAddress = new Read(address);

    return await this.readRepository.read(parsedAddress);
  }
}
