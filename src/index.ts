import { connectController } from "./useCases/Connect";
import * as net from "net";

(async () => {
  // const client = await connectController.handle();
  const client = new net.Socket({ readable: true, writable: true });

  client.setEncoding("hex");

  function onConnect() {
    console.log("Cliente Writable", client.writable);

    //client.write(Buffer.from([0]), (err) => console.log(err));
  }

  client.connect({ port: 502, host: "192.168.100.151" });

  client.on("connect", onConnect);

  client.on("close", (err) => console.log("Client Disconnected", err));

  client.on("data", (data) => console.log(data));

  client.on("timeout", (err) => console.log(err, "timeout"));

  client.on("error", (err) => console.log(err));

  client.on("end", (err) => console.log("End Connection", err));

  client.on("drain", () => console.log("drain"));

  client.on("lookup", (err) => console.log("Lookup"));
})();
