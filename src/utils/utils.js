const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');

const print = (message) => Console.print(message);

const close = () => Console.close();

const input = (message, callback) =>
  Console.readLine(message, callback.bind(this));

const printCountOfLottos = (number) => {
  print('');
  print(number + MESSAGE.COUNT_OF_PURCHASED_LOTTOS);
};

const printLottoNumbers = (lotto) => {
  print(
    `[${lotto[0]}, ${lotto[1]}, ${lotto[2]}, ${lotto[3]}, ${lotto[4]}, ${lotto[5]}]`
  );
};

module.exports = { print, close, input, printCountOfLottos };
