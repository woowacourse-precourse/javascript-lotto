const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');

const print = (message) => Console.print(message);

const close = () => Console.close();

const input = (message, callback) =>
  Console.readLine(message, callback.bind(this));

const printCountOfLottos = (number) => {
  print(number + MESSAGE.COUNT_OF_PURCHASED_LOTTOS);
};

module.exports = { print, close, input, printCountOfLottos };
