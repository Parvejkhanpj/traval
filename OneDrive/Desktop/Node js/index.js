// console.log("parvej khan");
// console.log("hello world")

// const lovish = require("./second");
// console.log("hello world", lovish);

//node js OS module 

const os = require('os');
console.log(os.EOL);
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.platform());
console.log(os.tmpdir());


// path module in node js

const path = require('path');
const a1 = path.basename('C: \Users\parvej khan\OneDrive\Desktop\Node js');

console.log(a1)
const a2 = path.dirname(__filename);
console.log(a2)




