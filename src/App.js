const { Console } = require('@woowacourse/mission-utils');
const GetNumber = require('./GetNumber');
const Lotto = require('./Lotto');
const CompareLotto = require('./CompareLotto');

class App {
  #purchaseAmount;
  #winningAmount;

  constructor() {
    this.Lotto = new Lotto();
    this.GetNumber = new GetNumber();
    this.lotto = new Lotto();
    this.CompareLotto = new CompareLotto();
  }

  play() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      const lottoList = this.Lotto.NumberPackage(money);

      this.#purchaseAmount = money;
      this.getWinNumber(lottoList);
    });
  }

  getWinNumber(lottoList) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (numbers) => {
      GetNumber.toWin(numbers);
      this.getBonusNumber(lottoList, numbers);
    });
  }

  getBonusNumber(lottoList, numbers) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (number) => {
      GetNumber.bonus(numbers, number);
      this.compareResult(lottoList, numbers, number);
    });
  }

  compareResult(lottoList, numbers, number) {
    const result = CompareLotto.result(lottoList, numbers, number);
    this.#winningAmount = CompareLotto.totalMoney(result);
    this.printValue(result);
  }

  printValue(result) {
    CompareLotto.printResult(result);
    this.printRate();
  }

  printRate() {
    const rate = ((this.#winningAmount / this.#purchaseAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

let a = new App();
a.play();

module.exports = App;
