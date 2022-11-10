const { Console, Random } = require("@woowacourse/mission-utils");

class CalculationMoney {
  canBuyLotto(money) {
    return money / 1000;
  }

  makeLotto(parchaedLottoNum) {
    let lottoNum = [];
    let i = 0;

    for (; i < parchaedLottoNum; i++) {
      let randomNum = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNum.push(randomNum.sort((a, b) => a - b));
    }
    return lottoNum;
  }
}
module.exports = CalculationMoney;
