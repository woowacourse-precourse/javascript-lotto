const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const {MESSAGE, LOTTO} = require("./constant");

class BuyLotto {
  constructor(buyPrice) {
    this.validate(buyPrice);
    this.price = Number(buyPrice);
    this.quantity = this.price / 1000;
  }

  validate(buyPrice) {
    const isNumber = new RegExp("[^0-9]", "g");
    
    if (isNumber.test(buyPrice)) {
      throw new Error(MESSAGE.ERROR.PRICE)
    };
    if (buyPrice % 1000 !== 0) {
      throw new Error(MESSAGE.ERROR.PRICE)
    };
  }

  makeLottoNumbers() {
    const quantity = this.quantity;
    const lottoNumbers = [];
    for (let i = 0; i < quantity; i++) {
      lottoNumbers.push(Random.pickUniqueNumbersInRange(LOTTO.RANGE.MIN, LOTTO.RANGE.MAX, LOTTO.LENGTH))
    }
    return lottoNumbers;
  }

}

module.exports = BuyLotto;
