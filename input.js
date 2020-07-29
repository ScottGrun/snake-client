const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    if (key === "\u0003") {
      process.exit();
    }

    switch (key) {
      case "\u0061":
        // Move Left
        console.log("Left");
        conn.write("Move: left");
        break;
      case "\u0064":
        // Move Right
        console.log("Right");
        conn.write("Move: right");
        break;
      case "\u0077":
        // Move Up
        conn.write("Move: up");
        console.log("Up");
        break;
      case "\u0073":
        // Move Down
        conn.write("Move: down");
        console.log("Down");
        break;
      case "\u006D":
        //Sends Message
        conn.write("Say: Hello there");

    }
  });

  return stdin;
};

// const handleUserInput = (key) => {
//   if (key === "\u0003") {
//     process.exit();
//   }
// };

module.exports = setupInput;
