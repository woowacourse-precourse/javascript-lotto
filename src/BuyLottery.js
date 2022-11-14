const MissionUtils = require("@woowacourse/mission-utils");
class BuyLottery {
  buy(money) {
    this.checkAmout(money);
    const quentity = this.numberOfpurchases(money);
    const lottos = this.createRendomLotto(quentity);
    return { quentity, lottos };
  }

  checkAmout(money) {
    if (money % 1000 !== 0)
      throw new Error("[ERROR] 금액은 1000원 단위로 나누어 떨어져야 합니다.");
  }

  numberOfpurchases(money) {
    return money / 1000;
  }

  createRendomLotto(lotteryNumber) {
    let totalLottoNumbers = [];
    while (lotteryNumber !== totalLottoNumbers.length) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      totalLottoNumbers.push(numbers.sort((a, b) => a - b));
    }

    return totalLottoNumbers;
  }
}

module.exports = BuyLottery;
