const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');

class InputView {
  constructor() {}

  static readLine = (text, callback) => {
    Console.readLine(`${text}\n`, callback);
  };

  static closeReadLine = () => {
    Console.close();
  };

  static requestPurchaseAmount = (callback) => {
    InputView.readLine(MESSAGE.REQUEST.PURCHASE_AMOUNT, callback);
  };

  static requestWinningNumbers = (callback) => {
    InputView.readLine(MESSAGE.REQUEST.WINNING_NUMBERS, callback);
  };

  static requestBonusNumber = (callback) => {
    InputView.readLine(MESSAGE.REQUEST.BOUNS_NUMBER, callback);
  };
}

module.exports = InputView;
