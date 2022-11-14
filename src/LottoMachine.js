const Lotto = require("./Lotto");

class LottoMachine {
  buyLotto(money) {
    const lottos = [];
    while (money > 0) {
      const numbers = this.createLottoNumbers();
      lottos.push(new Lotto(numbers));
    }
    return lottos;
  }

  createLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = LottoMachine;
