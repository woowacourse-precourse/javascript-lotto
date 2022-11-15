const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT } = require('./setting/Message');

const GetNumber = require('./GetNumber');
const Lotto = require('./Lotto');
const CompareLotto = require('./CompareLotto');
const LottoView = require('./view/LottoView');

class App {
  #purchaseAmount;
  #winningAmount;

  constructor() {
    this.Lotto = new Lotto();
    this.GetNumber = new GetNumber();
    this.lotto = new Lotto();
    this.CompareLotto = new CompareLotto();
    this.LottoView = new LottoView();
  }

  play() {
    this.LottoView.input(OUTPUT.TO_BUY, (money) => {
      const lottoList = this.Lotto.NumberPackage(money);

      this.#purchaseAmount = money;
      this.getWinNumber(lottoList);
    });
  }

  getWinNumber(lottoList) {
    this.LottoView.input(OUTPUT.PUT_WIN_NUMBER, (numbers) => {
      GetNumber.toWin(numbers);
      this.getBonusNumber(lottoList, numbers);
    });
  }

  getBonusNumber(lottoList, numbers) {
    this.LottoView.input(OUTPUT.PUT_BONUS_NUMBER, (number) => {
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
    this.LottoView.printTotal(rate);
    Console.close();
  }
}

let a = new App();
a.play();

module.exports = App;
