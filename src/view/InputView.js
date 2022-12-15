const { UTIL } = require('../constant/Libs');
const { Console } = require(UTIL);
const { ASk_MESSAGE } = require('../constant/Message');

const InputView = {
  readLine(askMessage, callback) {
    Console.readLine(askMessage, callback);
  },

  readLinePurchaseAmount(callback) {
    this.readLine(ASk_MESSAGE.PURCHASE_AMOUNT, callback);
  },

  readLineLottoNumber(callback) {
    this.readLine(ASk_MESSAGE.LOTTO_NUMBER, callback);
  },

  readLineLottoBonusNumber(callback) {
    this.readLine(ASk_MESSAGE.BONUS_NUMBER, callback);
  },
};

module.exports = InputView;
