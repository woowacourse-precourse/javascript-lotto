const { Console } = require('@woowacourse/mission-utils');
const GetLotto = require('./GetLotto');
const GetNumber = require('./GetNumber');

class App {
  constructor() {
    this.GetLotto = new GetLotto();
    this.GetNumber = new GetNumber();
  }

  play() {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      this.GetLotto.lottoNumberPackage(money);
    });
  }

  getWinNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.", (numbers) => {
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
a.getBonusNumber();

module.exports = App;
