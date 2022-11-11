const { Random } = require("@woowacourse/mission-utils");

class AutoLotto {
  constructor(randomLottoArray) {
    this.randomLottoArray = randomLottoArray;
  }

  makeRandomLottoArray(count) {
    const randomLottoArray = [];

    while (randomLottoArray.length < count) {
      randomLottoArray.push(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
    }

    this.randomLottoArray = randomLottoArray;
  }
}

module.exports = AutoLotto;
