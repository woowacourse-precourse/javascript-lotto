const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const WINNING_PRICE = {
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
};
class App {
  lottoAmount;
  winningLotteryNumbers;
  bonusNumber;
  lottos = [];
  profit = 0;
  result = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  };

  play() {
    this.getLottoAmount();
  }

  getLottoAmount() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (price) => {
      if (!Number(price)) {
        throw new Error('[ERROR] 구입금액은 숫자여야 합니다.');
      }
      if (parseInt(price) % 1000 !== 0) {
        throw new Error('[ERROR] 구입금액은 1,000원 단위로 입력하셔야 합니다.');
      }
      this.lottoAmount = parseInt(price) / 1000;
      this.makeLottoNumbers(this.lottoAmount);

      this.printPurchaseList();
      this.getWinningLotteryNumbers();
    });
  }

  getWinningLotteryNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (inputNumbers) => {
      const numbers = inputNumbers.toString().split(',').map(Number);
      if (numbers.length !== 6) {
        throw new Error('[ERROR] 당첨번호는 6개여야 합니다.');
      }

      this.winningLotteryNumbers = numbers;
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (number) => {
      this.bonusNumber = number;
      this.compareNumbers();
      this.computeProfit();
      this.printResult();
    });
  }

  printPurchaseList() {
    MissionUtils.Console.print(`${this.lottoAmount}개를 구매했습니다.`);
    this.lottos.forEach((lottoNumbers) => {
      const a = lottoNumbers.join(', ');
      MissionUtils.Console.print(`[${a}]`);
    });
  }

  computeProfit() {
    const totalWinningPrice =
      5000 * this.result.fifth +
      50000 * this.result.fourth +
      1500000 * this.result.third +
      30000000 * this.result.second +
      2000000000 * this.result.first;
    const purchaseAmount = this.lottoAmount * 1000;
    const profitPercent = (totalWinningPrice / purchaseAmount) * 100;
    this.profit = Math.round(profitPercent * 100) / 100;
  }

  makeLottoNumbers(amount) {
    for (let i = 0; i < amount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      this.lottos.push(lotto.show());
    }
  }

  compareNumbers() {
    this.lottos.forEach((lotto) => {
      const numbersOfMatch = this.winningLotteryNumbers.filter((num) => lotto.includes(num)).length;
      switch (numbersOfMatch) {
        case 3:
          this.result.fifth += 1;
          break;
        case 4:
          this.result.fourth += 1;
          break;
        case 5:
          if (!lotto.includes(this.bonusNumber)) {
            this.result.third += 1;
          } else {
            this.result.second += 1;
          }
        case 6:
          this.result.first += 1;
        default:
          return;
      }
    });
  }

  printResult() {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.result.fifth}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.result.fourth}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.result.third}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result.second}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.result.first}개`);
    MissionUtils.Console.print(`총 수익률은 ${this.profit}%입니다.`);
    MissionUtils.Console.close();
  }
}

module.exports = App;

const a = new App();
a.play();
