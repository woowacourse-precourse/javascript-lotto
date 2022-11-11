const { Console, Random } = require('@woowacourse/mission-utils');
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

  getCount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      this.amount = input;
      this.lottoCount = input / 1000;
    });
  }

  generateLottos() {
    const { lottoCount } = this;
    let lottos = [];

    while (lottos.length < lottoCount) {
      let numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

      lottos.push(numbers.sort((num1, num2) => num1 - num2));
    }
    this.lottos = lottos;
  }

  printLottos() {
    const { lottoCount, lottos } = this;

    Console.print(`${lottoCount}개를 구매했습니다.`);
    lottos.forEach((lottoNumbers) => {
      Console.print(lottoNumbers);
    });
  }

  readWinnigNumbers() {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (input) => {
      this.winningNumbers = new Set(input.split(',').map(Number));
    });
  }

  readBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
      this.bonusNumber = Number(input);
    });
  }

  getStatistics() {
    const { lottos, winningNumbers, bonusNumber } = this;

    lottos.forEach((lottoNumbers) => {
      const lotto = new Lotto(lottoNumbers);

      lotto.matchNumbers(winningNumbers, bonusNumber);
      lotto.getMatchInformation();
      if (lotto.matchCount >= 3) {
        this.earning += lotto.prize;
        this.statistics[lotto.matchInfo] += 1;
      }
    });
    this.getEarningRate(this.earning);
  }

  getEarningRate() {
    const { amount, earning } = this;
    const earningRate = (earning / amount) * 100;

    this.earningRate = +(Math.round(earningRate + 'e+1') + 'e-1');
  }

  printStatistics() {
    const { statistics, earningRate } = this;

    Console.print('당첨 통계\n---');
    for (const key in statistics) {
      Console.print(`${key} - ${statistics[key]}개`);
    }
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }

  play() {}
}

module.exports = App;
