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
  profit;
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
      if (parseInt(price) % 1000 !== 0) {
        throw new Error(
          '[ERROR] 구입 금액은 1,000원 단위로 입력하셔야 합니다.',
        );
      }
      this.lottoAmount = parseInt(price) / 1000;

      this.printPurchaseList();
      this.getWinningLotteryNumbers();
    });
  }

  getWinningLotteryNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (numbers) => {
      this.winningLotteryNumbers = numbers;
      this.getBonusNumber();
    });
  }

  printPurchaseList() {
    MissionUtils.Console.print(`${this.lottoAmount}개를 구매했습니다.`);
    this.lottos.forEach((lottoNumbers) => {
      MissionUtils.Console.print(`${lottoNumbers}`);
    });
  }

  getBonusNumber() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (number) => {
      this.bonusNumber = number;
      this.printPurchaseList();
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
    this.profit = Math.round((totalWinningPrice / purchaseAmount) * 100) / 100;
  }

  printResult() {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.result.fifth}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.result.fourth}개`);
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.result.third}개`,
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 불 일치 (1,500,000원) - ${this.result.second}개`,
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.result.first}개`,
    );
    MissionUtils.Console.print(`총 수익률은 ${this.profit}입니다.`);
  }
}

module.exports = App;
