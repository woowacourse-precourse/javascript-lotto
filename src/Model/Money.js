const Lotto = require("./Lotto");

class money {
  #money;

  constructor(money) {}

  //로또 뽑기 logic
  randomLottoNumber() {
    const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNum;
  }

  randomBonusNumber() {
    // const bonusNum = Random.
  }
}

module.exports = Money;
const b = new Lotto();
