const { Random, Console } = require('@woowacourse/mission-utils');

const random = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
};

const readLine = (query, callback) => {
  Console.readLine(query, callback);
};

const print = (message) => {
  Console.print(message);
};

const close = () => {
  Console.close();
};

const error = (message) => {
  throw new Error(message);
};

module.exports = { random, readLine, print, close, error };
