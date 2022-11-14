const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { sortNumbers } = require("./utils");

class LottoMachine {
  buyLottos(money) {
    const lottos = [];
    while (money > 0) {
      let numbers = this.createLottoNumbers();
      numbers = sortNumbers(numbers);
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
