const { Random } = require("@woowacourse/mission-utils");

class Generator {
  getNumbers(count) {
    const numbers = [];

    for (let i = 0; i < count; i++) {
      const number = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumber = this.sortNumber(number);

      numbers.push(sortedNumber);
    }

    return numbers;
  }

  sortNumber(number) {
    return number.sort((a, b) => a - b);
  }
}

module.exports = Generator;
