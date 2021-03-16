import { ModBusTCP } from './useCases/ModBus';

(async () => {
  try {
    const client = await ModBusTCP.connect({
      ip: '127.0.0.1',
      reconnection: true,
    });

    const success = await client.write({ holdingRegisters: 9 }, 10);

    const address9 = await client.read({ holdingRegisters: 9 });

    client.onChange({ holdingRegisters: 10 }, (value) => console.log(value));

    console.log(success, address9);
  } catch (error) {
    console.log(error);
  }
})();
