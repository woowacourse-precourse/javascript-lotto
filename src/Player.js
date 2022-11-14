const { Random } = require("@woowacourse/mission-utils");
const { REG_EXP } = require("./RegEx");
const { ERROR } = require("./Error");
class Player {
  #lottos;
  constructor(money) {
    this.#lottos = this.makeLottoNumbers(money);
  }
  makeLottoNumbers = (quantity) => {
    let lottos = [];
    this.validateMoney(quantity);
    for (let line = 0; line < Number(quantity) / 1000; line++) {
      lottos.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    return lottos;
  };
  validateMoney = (money) => {
    if (!REG_EXP.onlyNumber.test(money)) {
      throw new Error(ERROR.notNumber);
    }
    if (Number(money) % 1000 !== 0) {
      throw new Error(ERROR.cannotDivide);
    }
    return true;
  };
}

module.exports = { Player };
