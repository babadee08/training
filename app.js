const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();
const cpu = os.userInfo();

console.log(`Total Memory: ${totalMem} Free Memory: ${freeMem}`);
console.log(`Hostname Info:${os.hostname()}`);
console.log(`UserInfo Info: ${cpu}`);
console.log(`UserInfo Info: ${os.userInfo().username}`);