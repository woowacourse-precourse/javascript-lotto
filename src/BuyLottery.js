class BuyLottery {
  checkAmout(money) {
    if (money % 1000 !== 0)
      throw new Error("[ERROR] 금액은 1000원 단위로 나누어 떨어져야 합니다.");
  }
  numberOfpurchases(money) {
    let numberOfPurchases = money / 1000;
    return numberOfPurchases;
  }
  createRendomLotto(lotteryNumber) {
    let totalLottoNumbers = [];
    while (lotteryNumber !== arr.length) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      totalLottoNumbers.push(numbers);
    }
    return totalLottoNumbers;
  }
}

module.exports = BuyLottery;
