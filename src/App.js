const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, MATCH, RANK } = require('./Constant');
const { UNIT, FORMAT, PRIZE } = require('./Setting');
const Lotto = require('./Lotto');

class App {
  myLotto = [];
  ranks = Object.values(RANK);
  statistics = new Array(this.ranks.length + 1).fill(0);

  play() {
    Console.readLine(MESSAGE.INPUT_PURCHASE_AMOUNT, (input) => {
      this.purchaseAmount = input;
      this.lottoCount = input / 1000;
      this.setMyLotto();
      this.printMyLotto();
      this.winningResult();
    });
  }

  setMyLotto() {
    const { myLotto, lottoCount } = this;

    while (myLotto.length < lottoCount) {
      myLotto.push(new Lotto());
    }
  }

  printMyLotto() {
    const { myLotto, lottoCount } = this;

    Console.print(`${lottoCount}${UNIT.LOTTO}를 구매했습니다.`);
    myLotto.forEach((lotto) => {
      lotto.print();
    });
  }

  winningResult() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBERS, (input) => {
      const winningNumbers = input.split(',').map(Number);

      new Lotto(winningNumbers);
      this.winningNumbers = new Set(winningNumbers);
      this.winningStatistics();
    });
  }

  winningStatistics() {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (input) => {
      this.bonusNumber = Number(input);
      this.setStatistics();
      this.printStatistics();
      this.exit();
    });
  }

  setStatistics() {
    const { myLotto, winningNumbers, bonusNumber, statistics } = this;
    let earning = 0;

    myLotto.forEach((lotto) => {
      lotto.match(winningNumbers, bonusNumber);
      earning += PRIZE[lotto.rank];
      statistics[lotto.rank] += 1;
    });
    this.earning = earning;
    this.setEarningRate();
  }

  setEarningRate() {
    const { purchaseAmount, earning } = this;
    const earningRate = (earning / purchaseAmount) * 100;

    this.earningRate = +(Math.round(earningRate + 'e+1') + 'e-1');
  }

  printStatistics() {
    const { ranks, statistics, earningRate } = this;

    Console.print(MESSAGE.TITLE_STATISTICS);
    ranks.forEach((rank) => {
      const formatPrize = PRIZE[rank].toLocaleString(FORMAT.LOCALE);

      Console.print(
        `${MATCH[rank]} (${formatPrize}${UNIT.MONEY}) - ${statistics[rank]}${UNIT.LOTTO}`
      );
    });
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }

  exit() {
    Console.close();
  }
}

module.exports = App;
