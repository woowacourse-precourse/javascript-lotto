const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, MATCH, RANK } = require('./Constant');
const { UNIT, FORMAT, PRIZE } = require('./Setting');

class Statistics {
  ranks = Object.values(RANK);
  wins = new Array(this.ranks.length + 1).fill(0);

  set(myLotto, winningNumbers, bonusNumber) {
    const { wins } = this;
    let earning = 0;

    myLotto.forEach((lotto) => {
      lotto.match(winningNumbers, bonusNumber);
      earning += PRIZE[lotto.rank];
      wins[lotto.rank] += 1;
    });
    this.earning = earning;
    this.setEarningRate();
  }

  setEarningRate() {
    const { purchaseAmount, earning } = this;
    const earningRate = (earning / purchaseAmount) * 100;

    this.earningRate = +(Math.round(earningRate + 'e+1') + 'e-1');
  }

  print() {
    const { ranks, wins, earningRate } = this;

    Console.print(MESSAGE.TITLE_STATISTICS);
    ranks.forEach((rank) => {
      const formatPrize = PRIZE[rank].toLocaleString(FORMAT.LOCALE);

      Console.print(
        `${MATCH[rank]} (${formatPrize}${UNIT.MONEY}) - ${wins[rank]}${UNIT.LOTTO}`
      );
    });
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

module.exports = Statistics;
