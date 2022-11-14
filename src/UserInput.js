const { Console } = require('@woowacourse/mission-utils');
const BoughtLottoNumber = require('./BoughtLottoNumber');

class UserInput {

  static getPaymentAmount() {
    Console.readLine('구입금액을 입력해 주세요.', (input) => {
      let paymentAmount = parseInt(input)/1000;
      BoughtLottoNumber.boughtLotto(paymentAmount);
      Console.close();
    });
  }

}

module.exports = UserInput;

//UserInput.getPaymentAmount();