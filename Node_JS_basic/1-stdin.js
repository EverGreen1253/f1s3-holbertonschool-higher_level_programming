console.log('Welcome to Holberton School, what is your name?');

process.stdin.resume();

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  process.stdout.write(`Your name is: ${name}`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
