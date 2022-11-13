const { Random } = require("@woowacourse/mission-utils");

class NumberGenerator {
  createNumber() {
    const number = Random.pickUniqueNumbersInRange(1, 45, 6);
    return number.sort((a, b) => a - b);
  }

  drawLottery(quantity) {
    const lottoArr = [];
    for (let i = 0; i < quantity; i++) {
      lottoArr.push(this.createNumber());
    }

    return lottoArr;
  }
}

module.exports = NumberGenerator;
