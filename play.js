const connect = require("./client");

const setupInput = function (callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    console.log("hit");
    callback(key);
  });

  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
};

setupInput(handleUserInput);

console.log("connecting");
connect();
