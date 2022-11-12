const { Console } = require('@woowacourse/mission-utils');

const print = (message) => Console.print(message);

const close = () => Console.close();

module.exports = { print, close };
