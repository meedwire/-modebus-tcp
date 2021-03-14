import { TypeAddress } from '../../types';
import { ReadUseCase } from './ReadUseCase';

export class ReadController {
  constructor(private readUseCase: ReadUseCase) {}

  async handle(address: TypeAddress) {
    return await this.readUseCase.execute(address);
  }
}
