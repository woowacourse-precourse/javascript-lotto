const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants');


const InputView = {
  readInput (callback) {
    Console.readLine(MESSAGE.REQUEST_INPUT, callback);
  },

  readLuckyNumbers (callback) {
    Console.readLine(MESSAGE.REQUEST_LUCKY_NUMBERS, callback)
  },

  readBonusNumber (callback) {
    Console.readLine(MESSAGE.REQUEST_BONUS_NUMBER, callback)
  }

};

module.exports = InputView;