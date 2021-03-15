import { TypeAddress } from "../../types";
import { WriteUseCase } from "./WriteUseCase";

export class WriteController {
  constructor(private writeUseCase: WriteUseCase) {}

  async handle(address: TypeAddress, data: number) {
    return await this.writeUseCase.execute(address, data);
  }
}
