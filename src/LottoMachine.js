const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoMachine {
  buyLottos(money) {
    const lottos = [];
    while (money > 0) {
      const numbers = this.createLottoNumbers();
      lottos.push(new Lotto(numbers));
      money -= 1000;
    }
    return lottos;
  }

  createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = LottoMachine;
