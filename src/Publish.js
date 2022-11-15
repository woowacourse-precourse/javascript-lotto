const { Random } = require('@woowacourse/mission-utils');
const { MONEY, PUBLISH } = require('./Constant');
class Publish {
  constructor(money) {
    this.money = money;
    this.Quantity = this.countQuantity();
    this.create(this.Quantity);
  }

  countQuantity() {
    return this.money / MONEY.MIN;
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
