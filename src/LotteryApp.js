const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_INFO } = require('./constants/lottoSetting');
const Lotteries = require('./Lotteries');
const Accounting = require('./Accounting');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');

class LotteryApp {
  constructor() {
    this.lotteries = new Lotteries();
    this.accounting = new Accounting();
  }

  start() {
    InputView.readPurchaseMoney(this.purchaseLottos.bind(this));
  }

  purchaseLottos(money) {
    let leftMoney = this.setPurchaseMoney(money);
    while (leftMoney > 0) {
      leftMoney -= LOTTO_INFO.eachPrice;
      this.lotteries.purchaseAuto();
    }

    this.showLottos();
    this.askWinningDigit();
  }

  setPurchaseMoney(money) {
    this.accounting.setMoney(money);
    return money;
  }

  showLottos() {
    OutputView.printLottos(this.lotteries);
  }

  askWinningDigit() {
    InputView.readWinningDigit(this.makeWinningLotto.bind(this));
  }

  makeWinningLotto(digits) {
    this.lotteries.setWinningLotto(digits.split(',').map(Number));
    this.askBonusDigit();
  }

  askBonusDigit() {
    InputView.readBonusDigit(this.showResult.bind(this));
  }

  showResult(digits) {
    this.lotteries.setBonusLotto(Number(digits));
    this.compareLottoByWinningDigit();
    this.accounting.calcProfitRate(this.lotteries.getTotalPrize());
    OutputView.printResult(this.lotteries);
    OutputView.printProfit(this.accounting);
    Console.close();
  }

  compareLottoByWinningDigit() {
    const winningLotto = this.lotteries.getWinningLotto().getLotto();
    this.lotteries.getStorage().forEach(lotto => {
      const correctCount = lotto.countMatchDigit(winningLotto);
      this.lotteries.setRankGroup(correctCount, lotto);
    });
  }
}

module.exports = LotteryApp;
