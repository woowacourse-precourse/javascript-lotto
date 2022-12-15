const { UTIL } = require('../constant/Libs');
const { Console } = require(UTIL);
const { ASk_MESSAGE } = require('../constant/Message');

const InputView = {
  readLine(askMessage, callback) {
    Console.readLine(askMessage, callback);
  },
  readLinePurchaseAmount(callback) {
    this.readLine(ASk_MESSAGE.INPUT_PURCHASE_AMOUNT, callback);
  },
  readLineLottoNumber() {},
  readLineLottoBonusNumber() {},
};

module.exports = InputView;
