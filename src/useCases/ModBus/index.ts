import { ModBusController } from './ModBusController';
import { ModBusUseCase } from './ModBusUseCase';

const modBusUsesCase = new ModBusUseCase();

const ModBusTCP = new ModBusController(modBusUsesCase);

export { ModBusTCP, modBusUsesCase };
