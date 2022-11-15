const MissionUtils = require("@woowacourse/mission-utils");

class PurchaseLotto {
  constructor(money) {
    this.purchasePriceValidate(money)
    this.count = this.howManyLotto(money)
    this.purchasedLottoNumbers = this.createLottoNumber(this.count)

    Console.print(`${this.count}개를 구매했습니다.`)
    for (let purchasedLottoNumber of purchasedLottoNumbers) {
      Console.print(purchasedLottoNumber)
    }
  }

  isNumeric(str) {
    if (typeof str != "string") {
      return false
    }
    return !isNaN(str) && !isNaN(parseFloat(str))
  }

  purchasePriceValidate(price) {
    if (!this.isNumeric(price)) {
      throw new Error('[ERROR] 오로지 숫자만 입력 가능합니다.')
    }
    if (paseInt(price) < 1000) {
      throw new Error('[ERROR] 구매 금액이 1000 이상이어야 합니다.')
    }
    if (paseInt(price) % 1000 != 0) {
      throw new Error('[ERROR] 구매 금액이 1000 단위어야 합니다.')
    }
  }

  howManyLotto(price) {
    const lottoCount = parseInt(price / 1000)
    return lottoCount
  }

  createLottoNumber(count) {
    const totalLottoNumbers = []
    for (let i = 0; i < count; i++) {
      let lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      totalLottoNumbers.push(lottoNumber)
    }
    return totalLottoNumbers
  }
}

module.exports = PurchaseLotto;