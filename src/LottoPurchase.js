const MissionUtils = require("@woowacourse/mission-utils");

class LottoPurchase {

  constructor(amount) {
    this.devide(amount);
    this.amount = amount;
  }

  devide(amount) {
    if((amount % 1000) !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다. ");
    }
  } 

  randomNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }

  lottoPublish() {
    const count = this.amount / 1000;
    const lottoNumbers = [];

    for (let i = 0; i < count; i++) {
      lottoNumbers.push(randomNumbers());
    }
    return lottoNumbers;
  }
}

module.exports = LottoPurchase;