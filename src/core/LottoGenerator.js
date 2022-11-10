const { Random } = require('@woowacourse/mission-utils');

class LottoGenerator {
  getNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.sortDescendingNumbers(numbers);
  }

  getTimes(number) {
    let times = number;
    const lotto = [];
    while (times > 0) {
      lotto.push(this.getNumbers());
      times -= 1;
    }
    return lotto;
  }

  sortDescendingNumbers(numbers) {
    return numbers.sort((a, b) => (a > b ? 1 : -1));
  }
}

module.exports = LottoGenerator;
