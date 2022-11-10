const { Random } = require("@woowacourse/mission-utils");

class AutoLottos {
  constructor(randomLottoArray) {
    this.randomLottoArray = randomLottoArray;
  }

  makeRandomLottoArray(count) {
    const randomLottoArray = [];

    while (randomLottoArray.length < count) {
      randomLottoArray.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }

    this.randomLottoArray = randomLottoArray;
  }
}

module.exports = AutoLottos;
