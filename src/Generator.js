const { Random } = require("@woowacourse/mission-utils");

class Generator {
  getAllNumbers(count) {
    const allNumbers = [];

    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumbers = this.sortNumbers(numbers);

      allNumbers.push(sortedNumbers);
    }

    return allNumbers;
  }

  sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

module.exports = Generator;
