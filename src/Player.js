const { Random, Console } = require("@woowacourse/mission-utils");
const { isOnlyNumber, isAvailableMoney } = require("./Validation");
class Player {
  #lottos;
  constructor(money) {
    this.validateMoney(money);
    this.#lottos = this.makeLottoNumbers(money);
  }
  getLottos = () => {
    return this.#lottos;
  };
  makeLottoNumbers = (quantity) => {
    let lottos = [];
    for (let line = 0; line < Number(quantity) / 1000; line++) {
      lottos.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    return lottos;
  };
  validateMoney = (money) => {
    isOnlyNumber(String(money).split(""));
    isAvailableMoney(money);
    return true;
  };
  showLottoNumbers = () => {
    Console.print(`${this.#lottos.length}개를 구매했습니다.`);
    for (let lotto of this.#lottos) {
      Console.print(lotto);
    }
  };
}

module.exports = { Player };
