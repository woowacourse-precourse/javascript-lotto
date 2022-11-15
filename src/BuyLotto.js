const { LOTTO_DETAILS } = require("./constant/constant");
const { Random } = require("@woowacourse/mission-utils");
const Validation = require("./utils/Validation");

class BuyLotto {
  userLottoArr;
  #userLottos;

  constructor(userMoney) {
    this.validate(userMoney);
    this.userLottoEA(userMoney);
    this.getUserLottoArr(this.#userLottos);
  }

  validate(userMoney) {
    Validation.isNumber(userMoney);
    Validation.isLottoMoney(userMoney);
  }

  userLottoEA(userMoney) {
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
