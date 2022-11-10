const { Random } = require("@woowacourse/mission-utils");

class LottoNumber {
  make() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.sortNumbers(numbers);
  }

  sortNumbers(numbers) {
    return [...numbers].sort((pre, cur) => pre - cur);
  }
}

module.exports = LottoNumber;
