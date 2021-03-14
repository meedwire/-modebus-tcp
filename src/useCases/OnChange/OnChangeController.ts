import { TypeAddress } from '../../types';
import { OnChangeUseCase } from './OnChangeUseCase';

export class OnChangeController {
  constructor(private writeUseCase: OnChangeUseCase) {}

  async handle(address: TypeAddress, data: number) {
    const success = await this.writeUseCase.execute(address, data);

    return success;
  }
}
