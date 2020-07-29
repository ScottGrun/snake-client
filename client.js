const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  conn.setEncoding("utf-8");

  conn.on("connect", (data) => {
    console.log("Connection Established");
    conn.write("Name: SAG");

 
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect;
