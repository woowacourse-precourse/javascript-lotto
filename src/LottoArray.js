const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const getRandomNumbers = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};

class LottoArray {
  constructor(cash) {
    this.amount = this.countAmount(cash);
    this.lottoArray = this.purchaseLotto(this.amount);
  }

  countAmount(cash) {
    const amount = Math.floor(cash / 1000);
    return amount;
  }

  purchaseLotto(amount) {
    const lottoArray = Array.from({ length: amount }, () => this.makeLotto());
    return lottoArray;
  }

  makeLotto = () => {
    const randomNumbers = getRandomNumbers();
    const lotto = new Lotto(randomNumbers);
    return lotto;
  };
}

module.exports = LottoArray;
