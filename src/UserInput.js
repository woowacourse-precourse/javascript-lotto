const { Console } = require('@woowacourse/mission-utils');

class UserInput {

  getPaymentAmount() {
    Console.readLine('구입금액을 입력해 주세요.', (paymentAmount) => {
      return paymentAmount;
    })
  }

}

module.exports=UserInput;