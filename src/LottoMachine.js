const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoMachine {
  buyLottos(money) {
    const lottos = [];
    while (money > 0) {
      let numbers = this.createLottoNumbers();
      numbers = this.sortNumbers(numbers);
      lottos.push(new Lotto(numbers));
      money -= 1000;
    }
    return lottos;
  }

  createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  sortNumbers(numbers) {
    numbers = numbers.sort(function (a, b) {
      if (a > b) return 1;
      if (a === b) return 0;
      return -1;
    });
    return numbers;
  }
}

module.exports = LottoMachine;
