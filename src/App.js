const User = require('./User');
const Lotto = require('./Lotto');
const { Console } = require('@woowacourse/mission-utils');
const { checkMoneyValidation } = require('./utils/validations');
const { getLotteryResult, printResult } = require('./utils/lotteryHandler');
const { MESSAGE } = require('./utils/constant');

class App {
  constructor() {
    this.user = new User();
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(MESSAGE.INPUT.MONEY, (moneyInput) => {
      checkMoneyValidation(moneyInput);
      this.user.buyTickets(moneyInput);
      this.inputLottoNumbers();
    });
  }

  inputLottoNumbers() {
    Console.readLine(MESSAGE.INPUT.LOTTO_NUMBER, (inputNumbers) => {
      this.lotto = new Lotto(inputNumbers);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine(MESSAGE.INPUT.BONUS_NUMBER, (bonusNumber) => {
      this.lotto.setBonusNumber(bonusNumber);
      this.printLottoResult();
    });
  }

  printLottoResult() {
    const { numbers, bonusNumber } = this.lotto.numbers;
    const { tickets } = this.user;
    const totalResult = getLotteryResult(tickets, numbers, bonusNumber);
    printResult(totalResult, this.user.money);
    Console.close();
  }
}

module.exports = App;
