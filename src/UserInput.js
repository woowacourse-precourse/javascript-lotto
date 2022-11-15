const { Console } = require('@woowacourse/mission-utils');
const BoughtLottoNumber = require('./BoughtLottoNumber');
const {INPUT_MESSAGES} = require('./Constant');

class UserInput {

  static getPaymentAmount() {
    Console.readLine(INPUT_MESSAGES.PAYMENT_AMOUNT, (input) => {
      let paymentAmount = parseInt(input)/1000;
      BoughtLottoNumber.boughtLotto(paymentAmount);
      this.getUserInputNumber();
    });
  }

  static getUserInputNumber() {
    let userInputNumberArray = [];

    Console.readLine(INPUT_MESSAGES.USER_INPUT_NUMBER, (numbers) => {
      userInputNumberArray = numbers.split(',').map(x=>parseInt(x));
      console.log(userInputNumberArray); // [ 1, 11, 2, 22, 3, 33 ]
    });
    this.getUserBonusNumber();
  }

  static getUserBonusNumber() {
    Console.readLine(INPUT_MESSAGES.USER_BONUS_NUMBER, (number) => {

    })
  }

}

module.exports = UserInput;
UserInput.getPaymentAmount()
// UserInput.getUserInputNumber();