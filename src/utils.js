const { Console } = require('@woowacourse/mission-utils');

const utils = {
  getInput(message, callback) {
    Console.readLine(message, callback);
    Console.close();
  },
};

module.exports = utils;
