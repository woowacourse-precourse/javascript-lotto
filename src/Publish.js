const { Random } = require('@woowacourse/mission-utils');
const { PUBLISH } = require('./Constant');
class Publish {
  constructor(lottoQuantity) {
    this.lottoQuantity = lottoQuantity;
    this.create(this.lottoQuantity);
  }

  create(lottoQuantity) {
    this.result = new Object();
    for (let time = 0; time < lottoQuantity; time++) {
      let randomNumber = Random.pickUniqueNumbersInRange(
        PUBLISH.MIN_RANGE,
        PUBLISH.MAX_RANGE,
        PUBLISH.AMOUNT
      );
      this.result[time] = randomNumber;
    }
  }
}

module.exports = Publish;
