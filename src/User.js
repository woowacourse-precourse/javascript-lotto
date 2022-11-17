const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/message');
const Validator = require('./Validator');

class User {
  static inputTotalPurchaseAmount(callback) {
    Console.readLine(MESSAGE.INPUT.TOTAL_PURCHASE_AMOUNT, (answer) => {
      const totalPurchaseAmount = Number(answer);
      Validator.validateTotalPurchaseAmount(totalPurchaseAmount);

      return callback(totalPurchaseAmount);
    });
    return this;
  }

  static inputWinningLottoNumbers(callback) {
    Console.readLine(MESSAGE.INPUT.WINNING_LOTTO_NUMBERS, (answer) => {
      const winningLottoNumbers = answer.split(',').map(Number);
      Validator.validateLottoNumbers(winningLottoNumbers);

      return callback(winningLottoNumbers);
    });
  }

  static inputBonusLottoNumber(callback) {
    Console.readLine(MESSAGE.INPUT.BONUS_LOTTO_NUMBER, (answer) => {
      const bonusLottoNumber = Number(answer);
      Validator.validateLottoNumber(bonusLottoNumber);

      return callback(bonusLottoNumber);
    });
  }
}

module.exports = User;
