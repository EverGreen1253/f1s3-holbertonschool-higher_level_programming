// const { exit } = require('process');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function ask(question) {
//   rl.question(question, (answer) => {
//     console.log(`Your name is: ${answer}`);
//     console.log('This important software is now closing');
//     exit();
//   });
// }

// ask('Welcome to Holberton School, what is your name?\n');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.resume();

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  process.stdout.write(`Your name is: ${name}`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
