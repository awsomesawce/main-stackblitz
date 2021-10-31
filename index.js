// run `node index.js` in the terminal

const got = require('got');
const yaml = require('js-yaml');
const minimist = require('minimist');

console.log(`Hello Node.js v${process.versions.node}!`);

/**
 * Testing got
 *
 */

(async () => {
  let res = await got('https://api.github.com').json();
  let other = res;
  console.log(res);
})();

console.log(JSON.stringify(minimist(process.argv)));
