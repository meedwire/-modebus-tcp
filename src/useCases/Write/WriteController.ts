import { TypeAddress } from '../../types';
import { WriteUseCase } from './WriteUseCase';

export class WriteController {
  constructor(private writeUseCase: WriteUseCase) {}

  async handle(address: TypeAddress, data: number) {
    const success = await this.writeUseCase.execute(address, data);

    return success;
  }
}
