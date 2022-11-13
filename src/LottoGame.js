const { REWARD, STATISTICS } = require('../src/utils/constants');

class LottoGame {
  user;
  winningNumbers;
  bonusNumber;

  constructor(user, winningNumbers, bonusNumber) {
    this.user = user;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  getGameResult() {
    const matchCount = this.user.lottos.map(lotto =>
      this.getMatchCount(lotto.numbers, this.winningNumbers.numbers, this.bonusNumber)
    );

    const fifth = matchCount.filter(([count]) => count === 3).length;
    const fourth = matchCount.filter(([count]) => count === 4).length;
    const third = matchCount.filter(([count]) => count === 5).length;
    const second = matchCount.filter(([count, bonusMatch]) => count === 5 && bonusMatch).length;
    const first = matchCount.filter(([count]) => count === 6).length;

    return { fifth, fourth, third, second, first };
  }

  getMatchCount(numbers, winningNumbers, bonusNumber) {
    const matchCount = numbers.filter(number => winningNumbers.includes(number) || number === bonusNumber).length;
    const bonusMatch = numbers.includes(bonusNumber);

    return [matchCount, bonusMatch];
  }

  calcReward({ fifth, fourth, third, second, first }) {
    const reward =
      fifth * REWARD.FIFTH +
      fourth * REWARD.FOURTH +
      third * REWARD.THIRD +
      second * REWARD.SECOND +
      first * REWARD.FIRST;

    return reward ? reward : 0;
  }

  calcRevenue(reward) {
    const revenue = (reward / this.user.purchaseAmount) * 100;
    return LottoGame.roundToTwo(revenue);
  }

  static roundToTwo(number) {
    return +(Math.round(number + 'e+2') + 'e-2');
  }

  printStatistics({ fifth, fourth, third, second, first }, revenue) {
    const statistics = [];
    statistics.push(STATISTICS.TITLE);
    statistics.push(STATISTICS.FIFTH_PRIZE(fifth));
    statistics.push(STATISTICS.FOURTH_PRIZE(fourth));
    statistics.push(STATISTICS.THIRD_PRIZE(third));
    statistics.push(STATISTICS.SECOND_PRIZE(second));
    statistics.push(STATISTICS.FIRST_PRIZE(first));
    statistics.push(STATISTICS.REVENUE(revenue));

    Console.print(statistics.join(''));
  }
}

module.exports = LottoGame;
