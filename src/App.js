const User = require('./User');
const Lotto = require('./Lotto');
const { Console } = require('@woowacourse/mission-utils');
const { checkMoneyValidation } = require('./utils/validations');

class App {
  constructor() {
    this.user = new User();
    this.lottoNumbers = [];
    this.bonusNumber = 0;
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
    });
  }
}

module.exports = App;
