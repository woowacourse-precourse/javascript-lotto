const { Console } = require('@woowacourse/mission-utils');
const { PRICE } = require('./settings');
const Message = require('./Message');
const ErrorHandling = require('./ErrorHandling');

class Purchase {
  static pay(callback) {
    Console.readLine(Message.PRICE, (answer) => {
      const money = Number(answer);

      Purchase.validate(money);

      const lottoCount = Purchase.countLotto(money);

      callback(money, lottoCount);
    });
  }

  static countLotto(money) {
    return money / PRICE;
  }

  static validate(money) {
    const { handleException, checkIsNaturalNumber } = ErrorHandling;

    checkIsNaturalNumber(money, '구입 금액은');

    const hasRemainder = money % PRICE !== 0;

    handleException(hasRemainder, '구입 금액은 1,000원 단위로 입력해야 합니다.');
  }
}

module.exports = Purchase;
