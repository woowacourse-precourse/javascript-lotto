class BuyLottery {
  checkAmout(money) {
    if (money % 1000 !== 0)
      throw new Error("[ERROR] 금액은 1000원 단위로 나누어 떨어져야 합니다.");
  }
}

module.exports = BuyLottery;
