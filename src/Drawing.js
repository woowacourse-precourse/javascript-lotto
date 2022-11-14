const { REWARD, STATISTICS } = require('./utils/constants');

class Drawing {
  #user;
  #winningNumbers;
  #bonusNumber;

  set user(user) {
    this.#user = user;
  }

  set winningNumbers(winningNumbers) {
    this.#winningNumbers = winningNumbers;
  }

  set bonusNumber(bonusNumber) {
    this.#bonusNumber = bonusNumber;
  }

  get user() {
    return this.#user;
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  draw() {
    const drawResult = this.getDrawResult();
    const reward = this.calcReward(drawResult);
    const revenue = this.calcRevenue(reward);
    return this.getStatistics(drawResult, revenue);
  }

  getDrawResult() {
    const matchCount = this.user.lottos.map(lotto =>
      this.getMatchCount(lotto.numbers, this.winningNumbers, this.bonusNumber)
    );

    const fifth = matchCount.filter(([count]) => count === 3).length;
    const fourth = matchCount.filter(([count]) => count === 4).length;
    const third = matchCount.filter(([count]) => count === 5).length;
    const second = matchCount.filter(([count, bonusMatch]) => count === 5 && bonusMatch).length;
    const first = matchCount.filter(([count]) => count === 6).length;

    return { fifth, fourth, third, second, first };
  }

  getMatchCount(numbers, winningNumbers, bonusNumber) {
    const matchCount = numbers.filter(number => winningNumbers.includes(number)).length;
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
    return Drawing.roundToTwo(revenue);
  }

  static roundToTwo(number) {
    return +(Math.round(number + 'e+2') + 'e-2');
  }

  getStatistics({ fifth, fourth, third, second, first }, revenue) {
    const statistics = [];

    statistics.push('\n');
    statistics.push(STATISTICS.TITLE);
    statistics.push(STATISTICS.FIFTH_PRIZE(fifth));
    statistics.push(STATISTICS.FOURTH_PRIZE(fourth));
    statistics.push(STATISTICS.THIRD_PRIZE(third));
    statistics.push(STATISTICS.SECOND_PRIZE(second));
    statistics.push(STATISTICS.FIRST_PRIZE(first));
    statistics.push(STATISTICS.REVENUE(revenue));

    return statistics.join('');
  }
}

module.exports = Drawing;
