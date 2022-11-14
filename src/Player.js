const { Random } = require("@woowacourse/mission-utils");
const { REG_EXP } = require("./RegEx");
const { ERROR } = require("./Error");
class Player {
  #lottos;
  constructor() {
    this.#lottos = [];
  }
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
