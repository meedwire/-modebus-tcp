import { ModBusTCP } from './useCases/ModBus';

(async () => {
  try {
    const client = await ModBusTCP.connect({
      ip: '127.0.0.1',
      reconnection: true,
    });

    const success = await client.write({ holdingRegisters: 9 }, 10);

    const address9 = await client.read({ holdingRegisters: 9 });

    const address10 = await client.read({ holdingRegisters: 10 });

    const address11 = await client.read({ holdingRegisters: 11 });

    client.onChange({ holdingRegisters: 10 }, (value) => console.log(value));

    client.onChange({ holdingRegisters: 11 }, (value) => console.log(value));

    // client.onChange({ holdingRegisters: 12 }, (value) => console.log(value));

    // client.onChange({ holdingRegisters: 13 }, (value) => console.log(value));

    // client.onChange({ holdingRegisters: 14 }, (value) => console.log(value));

    // client.onChange({ holdingRegisters: 15 }, (value) => console.log(value));

    console.log(success, address9);
  } catch (error) {
    console.log(error);
  }
})();
