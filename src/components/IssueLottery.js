const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class IssueLottery {
  static setLotteryNumber(purchaseNumber) {
    const results = [];
    let draw = purchaseNumber / 1000;
    while (draw !== 0) {
      results.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
      draw -= 1;
    }
    return results;
  }
}

module.exports = IssueLottery;
