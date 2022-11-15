const { Console } = require('@woowacourse/mission-utils');
const { validateWinningNumbersInput, validateBonusNumberInput } = require('./utils/inputValidate');
const Lotto = require('./Lotto');
const User = require('./User');
const Display = require('./Display');

class Machine {
  static user = new User();
  #winningNumbers;
  #bonusNumber;
  rankingCountMap;

  constructor(payment) {
    Machine.user.payment = payment;
    Machine.user.quantity = payment / Display.info('PRICE');

    this.#winningNumbers = [];
    this.#bonusNumber = 0;
    this.rankingCountMap = new Map();
  }

  work() {
    this.#issue();
    this.#displayPurchasedLottoInfo();
    this.#getWinningNumbersInput();
  }

  #issue() {
    let cnt = 0;
    while (cnt < Machine.user.quantity) {
      const numbers = Display.randomNumbers();
      const lotto = new Lotto(numbers);
      Machine.user.purchasedLotto.push(lotto);
      cnt += 1;
    }
  }

  #displayPurchasedLottoInfo() {
    Console.print(Display.statistics('QUANTITY', Machine.user.quantity));

    Machine.user.purchasedLotto.forEach((lotto) => {
      Console.print(Display.lottoFormat(lotto.numbers));
    });
  }

  #getWinningNumbersInput() {
    Console.readLine(Display.guidance('WINNING_NUMBER_INPUT'), (winning) => {
      validateWinningNumbersInput(winning);
      this.#winningNumbers = winning.split(',').map((s) => +s);

      this.#getBonusNumberInput();
    });
  }

  #getBonusNumberInput() {
    Console.readLine(Display.guidance('BONUS_NUMBER_INPUT'), (bonus) => {
      validateBonusNumberInput(bonus);
      this.#bonusNumber = +bonus;

      this.#countTotalRankings();
    });
  }

  #countTotalRankings() {
    Machine.user.purchasedLotto.forEach((lotto) => {
      const winningBonusCounts = lotto.countWinningBonusNumbers({
        winning: this.#winningNumbers,
        bonus: this.#bonusNumber,
      });
      this.#computeRankingCountMap(winningBonusCounts);
    });

    this.#displayResult();
  }

  #computeRankingCountMap(lottoCounts) {
    const ranking = this.#getRanking(lottoCounts);
    let count = this.rankingCountMap.get(ranking) || 0;
    this.rankingCountMap.set(ranking, (count += 1));
  }

  #getRanking({ winningCount, bonusCount }) {
    switch (winningCount) {
      case 3:
        return 'FIFTH';
      case 4:
        return 'FOURTH';
      case 5:
        return bonusCount === 1 ? 'SECOND' : 'THIRD';
      case 6:
        return 'FIRST';
      default:
        return null;
    }
  }

  #displayResult() {
    Console.print(Display.guidance('RESULT'));

    const rankings = ['FIFTH', 'FOURTH', 'THIRD', 'SECOND', 'FIRST'];

    rankings.forEach((ranking) => {
      Console.print(Display.rankingStatistics(ranking, this.rankingCountMap.get(ranking) || 0));
    });

    this.#displayProfits();
  }

  #displayProfits() {
    this.#computeProfits();
    Console.print(Display.statistics('PROFITS', Machine.user.profits));
  }

  #computeProfits() {
    Machine.user.winningPrize = [...this.rankingCountMap].reduce((sum, [ranking, count]) => {
      let prize = 0;
      if (ranking) {
        prize = Display.rankingInfo(ranking).prize.replaceAll(',', '');
      }
      sum += prize * count;
      return sum;
    }, 0);

    Machine.user.profits = ((Machine.user.winningPrize / Machine.user.payment) * 100).toFixed(1);
  }
}

module.exports = Machine;
