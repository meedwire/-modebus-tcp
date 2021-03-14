import { ModBusTCP } from './useCases/ModBus';

(async () => {
  const client = await ModBusTCP.connect({
    ip: '127.0.0.1',
    reconnection: true,
  });

  const value1 = await client.read({ holdingRegisters: 10 });
  const value2 = await client.read({ holdingRegisters: 11 });
  const value3 = await client.read({ holdingRegisters: 12 });
  const value4 = await client.read({ holdingRegisters: 13 });
  const value5 = await client.read({ holdingRegisters: 14 });

  console.log(value1, value2, value3, value4, value5);

  // await client.write({ holdingRegisters: 10 }, 1200);

  // await client.write({ holdingRegisters: 11 }, 10);

  // await client.write({ holdingRegisters: 12 }, 25);

  // await client.write({ holdingRegisters: 13 }, 22);

  // await client.write({ holdingRegisters: 14 }, 15);

  // await client.write({ holdingRegisters: 15 }, 23);

  //client.on('connect', () => console.log('Cliente connectado'));

  //client.on('close', () => console.log('Client Desconnectda'));
})();
