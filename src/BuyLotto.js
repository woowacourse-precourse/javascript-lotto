const { BUY_LOTTO, LOTTO_DETAILS, ERROR } = require("./constant/constant");
const { Random } = require("@woowacourse/mission-utils");

class BuyLotto {
  userLottoArr;
  #userLottos;

  constructor(userMoney) {
    this.validate(userMoney);
    this.howManyUserLotto(userMoney);
    this.getUserLottoArr(this.#userLottos);
  }

  validate(userMoney) {
    if (isNaN(userMoney)) {
      throw new Error(ERROR.NAN);
    }
    if (userMoney % 1000 !== 0) {
      throw new Error(BUY_LOTTO.ERROR);
    }
  }

  howManyUserLotto(userMoney) {
    this.#userLottos = userMoney / LOTTO_DETAILS.PRICE;
  }

  getUserLottoArr() {
    const userLottos = Array.from({ length: this.#userLottos });
    this.userLottoArr = userLottos.map(() => {
      return Random.pickUniqueNumbersInRange(
        LOTTO_DETAILS.MIN,
        LOTTO_DETAILS.MAX,
        LOTTO_DETAILS.EA
      );
    });
  }
}

module.exports = BuyLotto;
