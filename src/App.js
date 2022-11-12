const { Console } = require('@woowacourse/mission-utils');
const GetLotto = require('./GetLotto');
const GetNumber = require('./GetNumber');
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.GetLotto = new GetLotto();
    this.GetNumber = new GetNumber();
    this.lotto = new Lotto();
  }

  play() {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      let lottoList = this.GetLotto.lottoNumberPackage(money);
    });
  }

  getWinNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.", (numbers) => {
      this.lotto.validate(numbers);
      this.GetNumber.toWin(numbers);
    });
  }

  getBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.", (number) => {
      this.GetNumber.bonus(number);
    });
  }
}

let a = new App();
a.getWinNumber();

module.exports = App;
