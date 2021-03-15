import { ModBusTCP } from "./useCases/ModBus";

(async () => {
  const client = await ModBusTCP.connect({
    ip: "192.168.100.151",
    reconnection: true,
  });

  // const value2 = await client.read({ holdingRegisters: 12305 });
  // const value3 = await client.read({ holdingRegisters: 12306 });
  // const value4 = await client.read({ holdingRegisters: 13 });
  // const value5 = await client.read({ holdingRegisters: 14 });

  // client.onChange({holdingRegisters: 10}, (value) => console.log(value))

  // console.log(value1, value2, value3, value4, value5);

  const value = await client.write({ holdingRegisters: 9 }, 10);

  const value1 = await client.read({ holdingRegisters: 9 });

  console.log(
    new Date().toLocaleTimeString() + ":" + new Date().getMilliseconds(),
    value,
    new Date().toLocaleTimeString() + ":" + new Date().getMilliseconds(),
    value1
  );

  // await client.write({ holdingRegisters: 11 }, 10);

  // await client.write({ holdingRegisters: 12 }, 25);

  // await client.write({ holdingRegisters: 13 }, 22);

  // await client.write({ holdingRegisters: 14 }, 15);

  // await client.write({ holdingRegisters: 15 }, 23);

  //client.on('connect', () => console.log('Cliente connectado'));

  //client.on('close', () => console.log('Client Desconnectda'));
})();
