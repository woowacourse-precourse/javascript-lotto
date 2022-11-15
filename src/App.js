const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT } = require('./setting/Message');
const { APP_VALUE } = require('./setting/Constants');

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
    this.LottoView.input(OUTPUT.PUT_WIN_NUMBER, (winNumber) => {
      GetNumber.toWin(winNumber);
      this.getBonusNumber(lottoList, winNumber);
    });
  }

  getBonusNumber(lottoList, winNumber) {
    this.LottoView.input(OUTPUT.PUT_BONUS_NUMBER, (bonusNumber) => {
      GetNumber.bonus(winNumber, bonusNumber);
      this.compareResult(lottoList, winNumber, bonusNumber);
    });
  }

  compareResult(lottoList, winNumbers, bonusNumber) {
    const result = CompareLotto.result(lottoList, winNumbers, bonusNumber);
    this.#winningAmount = CompareLotto.totalMoney(result);
    this.printValue(result);
  }

  printValue(result) {
    this.LottoView.eachResult(result);
    this.printRate();
  }

  printRate() {
    const rate = ((this.#winningAmount / this.#purchaseAmount) * APP_VALUE.rate).toFixed(APP_VALUE.point);
    this.LottoView.printTotal(rate);
    Console.close();
  }
}

module.exports = App;
