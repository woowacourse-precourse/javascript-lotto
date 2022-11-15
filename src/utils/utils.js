const { Console } = require('@woowacourse/mission-utils');

const print = (message) => Console.print(message);

const close = () => Console.close();

const input = (message, callback) => {
  Console.readLine(message, callback.bind(this));
};

module.exports = { print, close, input };
