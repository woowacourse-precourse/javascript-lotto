const { Random } = require('@woowacourse/mission-utils');

class LottoGenerator {
  getNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
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
}

module.exports = LottoGenerator;
