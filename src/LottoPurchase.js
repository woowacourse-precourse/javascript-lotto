const { Random } = require("@woowacourse/mission-utils");
const { LOTTO_PURCHASE_UNIT, ERROR_MESSAGE } = require("../constants/LottoConstants");


class LottoPurchase {

  constructor(amount) {
    this.devide(amount);
    this.amount = amount;
  }

  devide(amount) {
    if((amount % LOTTO_PURCHASE_UNIT) !== 0) {
      throw new Error(ERROR_MESSAGE.INPUT_AMOUNT_BE_THOUSANDS_UNIT);
    }
  } 

  randomNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }

  lottoPublish() {
    const count = this.amount / LOTTO_PURCHASE_UNIT;
    const lottoNumbers = [];

    for (let i = 0; i < count; i++) {
      lottoNumbers.push(this.randomNumbers());
    }
    return this.lottoNumbersSort(lottoNumbers);
  }

  lottoNumbersSort(lottoNumbers) {
    lottoNumbers = lottoNumbers.map(arr => arr.sort((a,b) => {
      return a - b;
    }))
    return lottoNumbers;
  }
}

module.exports = LottoPurchase;