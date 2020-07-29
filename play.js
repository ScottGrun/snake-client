const connect = require("./client");
const  setupInput = require('./input');
let con = connect();




console.log("connecting");
setupInput(con);

