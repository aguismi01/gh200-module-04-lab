const fs = require('node:fs');

const who = process.env.INPUT_WHO;
if (!who || /[\r\n]/.test(who)) {
  console.error('::error::Input "who" must be a single non-empty line');
  process.exitCode = 1;
} else {
  const greeting = `Hello, ${who}`;
  console.log(greeting);
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `greeting=${greeting}\n`);
}