const { Random, Console } = require('@woowacourse/mission-utils');

class Publish {
  constructor(lottoQuantity) {
    this.lottoQuantity = lottoQuantity;
    this.create(this.lottoQuantity);
  }

  create(lottoQuantity) {
    this.publishResult = new Object();
    for (let time = 0; time < lottoQuantity; time++) {
      let randomNumber = Random.pickUniqueNumbersInRange(1, 10, 6);
      this.publishResult[time] = randomNumber;
    }
  }
}

module.exports = Publish;
