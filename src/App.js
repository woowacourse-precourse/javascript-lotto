const { Console, Random } = require('@woowacourse/mission-utils');
const { UNIT, MESSAGE } = require('./Const');
const Lotto = require('./Lotto');

class App {
  earning = 0;
  statistics = {
    '3개 일치 (5,000원)': 0,
    '4개 일치 (50,000원)': 0,
    '5개 일치 (1,500,000원)': 0,
    '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
    '6개 일치 (2,000,000,000원)': 0,
  };

  getLottoCount() {
    Console.readLine(MESSAGE.INPUT_PURCHASE_AMOUNT, (input) => {
      this.purchaseAmount = input;
      this.lottoCount = input / 1000;
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
      Console.print(lottoNumbers);
    });
  }

  readWinnigNumbers() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBERS, (input) => {
      this.winningNumbers = new Set(input.split(',').map(Number));
    });
  }

  readBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (input) => {
      this.bonusNumber = Number(input);
    });
  }

  getStatistics() {
    const { lottos, winningNumbers, bonusNumber } = this;

    lottos.forEach((lottoNumbers) => {
      const lotto = new Lotto(lottoNumbers);

      lotto.matchNumbers(winningNumbers, bonusNumber);
      lotto.getMatchInformation();
      if (lotto.prize > 0) {
        this.earning += lotto.prize;
        this.statistics[lotto.matchInfo] += 1;
      }
    });
    this.getEarningRate(this.earning);
  }

  getEarningRate() {
    const { purchaseAmount, earning } = this;
    const earningRate = (earning / purchaseAmount) * 100;

    this.earningRate = +(Math.round(earningRate + 'e+1') + 'e-1');
  }

  printStatistics() {
    const { statistics, earningRate } = this;

    Console.print('당첨 통계\n---');
    for (const key in statistics) {
      Console.print(`${key} - ${statistics[key]}${UNIT.LOTTO}`);
    }
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }

  play() {}
}

module.exports = App;
