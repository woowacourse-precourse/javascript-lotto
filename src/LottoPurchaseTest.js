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
}

module.exports = LottoPurchase;