const { Random, Console } = require('@woowacourse/mission-utils');

const print = (message) => {
  return Console.print(message);
};

const readLine = (query, callback) => {
  return Console.readLine(query, callback);
};

const close = () => {
  return Console.close();
};

module.exports = {
  Random,
  print,
  readLine,
  close,
};
