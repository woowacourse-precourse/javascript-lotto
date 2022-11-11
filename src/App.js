const User = require('./User');
const Lotto = require('./Lotto');
const { Console } = require('@woowacourse/mission-utils');
const { checkMoneyValidation } = require('./utils/validations');
const { getLotteryResult, printResult } = require('./utils/lotteryHandler');

class App {
  constructor() {
    this.user = new User();
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine('구입금액을 입력해 주세요.', (moneyInput) => {
      checkMoneyValidation(moneyInput);
      this.user.buyTickets(moneyInput);
      this.inputLottoNumbers();
    });
  }

  inputLottoNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.', (inputNumbers) => {
      this.lotto = new Lotto(inputNumbers);
      this.inputBonusNumber();
    });
  }

  inputBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.', (bonusNumber) => {
      this.lotto.setBonusNumber(bonusNumber);
      this.printLottoResult();
    });
  }

  printLottoResult() {
    const { numbers, bonusNumber } = this.lotto.numbers;
    const { tickets } = this.user;
    const totalResult = getLotteryResult(tickets, numbers, bonusNumber);
    printResult(totalResult);
    Console.close();
  }
}

module.exports = App;
