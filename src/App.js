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
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      let lottoList = this.GetLotto.lottoNumberPackage(money);

      this.getWinNumber(lottoList);
    });
  }

  getWinNumber(lottoList) {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (numbers) => {
      this.GetNumber.toWin(numbers);
      this.getBonusNumber(lottoList, numbers);
    });
  }

  getBonusNumber(lottoList, numbers) {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (number) => {
      this.GetNumber.bonus(numbers, number);
    });
  }
}

let a = new App();
a.play();

module.exports = App;
