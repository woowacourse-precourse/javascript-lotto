const { Console, Random } = require('@woowacourse/mission-utils');
const { UNIT, FORMAT, MESSAGE, MATCH, RANK, PRIZE } = require('./Constant');
const Lotto = require('./Lotto');

class App {
  ranks = Object.values(RANK);
  statistics = new Array(this.ranks.length + 1).fill(0);
  earning = 0;

  interaction() {
    Console.readLine(MESSAGE.INPUT_PURCHASE_AMOUNT, (input) => {
      this.purchaseAmount = input;
      this.lottoCount = input / 1000;
      this.generateLottos();
      this.printLottos();
      this.winningResult();
    });
  }

  generateLottos() {
    const { lottoCount } = this;
    let lottos = [];

    while (lottos.length < lottoCount) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

      lottos.push(numbers.sort((num1, num2) => num1 - num2));
    }
    this.lottos = lottos;
  }

  printLottos() {
    const { lottoCount, lottos } = this;

    Console.print(`${lottoCount}${UNIT.LOTTO}를 구매했습니다.`);
    lottos.forEach((lottoNumbers) => {
      Console.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  winningResult() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBERS, (input) => {
      this.winningNumbers = new Set(input.split(',').map(Number));
      this.winningStatistics();
    });
  }

  winningStatistics() {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (input) => {
      this.bonusNumber = Number(input);
      this.setStatistics();
      this.printStatistics();
      Console.close();
    });
  }

  setStatistics() {
    const { lottos, winningNumbers, bonusNumber } = this;

    lottos.forEach((lottoNumbers) => {
      const lotto = new Lotto(lottoNumbers);

      lotto.matchNumbers(winningNumbers, bonusNumber);
      lotto.setRank();
      this.earning += PRIZE[lotto.rank];
      this.statistics[lotto.rank] += 1;
    });
    this.setEarningRate();
  }

  setEarningRate() {
    const { purchaseAmount, earning } = this;
    const earningRate = (earning / purchaseAmount) * 100;

    this.earningRate = +(Math.round(earningRate + 'e+1') + 'e-1');
  }

  printStatistics() {
    const { ranks, statistics, earningRate } = this;

    Console.print('당첨 통계\n---');
    ranks.forEach((rank) => {
      const formatPrize = PRIZE[rank].toLocaleString(FORMAT.LOCALE);

      Console.print(
        `${MATCH[rank]} (${formatPrize}${UNIT.MONEY}) - ${statistics[rank]}${UNIT.LOTTO}`
      );
    });
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }

  play() {
    this.interaction();
  }
}

module.exports = App;
