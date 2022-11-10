const { Random, Console } = require('@woowacourse/mission-utils');

class Publish {
  constructor(lottoQuantity) {
    this.lottoQuantity = lottoQuantity;
    this.create(this.lottoQuantity);
  }

  create(lottoQuantity) {
    this.result = new Object();
    for (let time = 0; time < lottoQuantity; time++) {
      let randomNumber = Random.pickUniqueNumbersInRange(1, 10, 6);
      this.result[time] = randomNumber;
    }
  }
}

module.exports = Publish;
