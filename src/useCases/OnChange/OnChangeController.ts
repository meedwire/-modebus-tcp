import { TypeAddress } from '../../types';
import { OnChangeUseCase } from './OnChangeUseCase';

export class OnChangeController {
  constructor(private writeUseCase: OnChangeUseCase) {}

  handle(address: TypeAddress, callback: (value: number) => void) {
    this.writeUseCase.execute(address, callback);
  }
}
