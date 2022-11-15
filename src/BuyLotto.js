const { LOTTO_DETAILS, BUY_LOTTO } = require("./constant/constant");
const { Random } = require("@woowacourse/mission-utils");
const Validation = require("./utils/Validation");
const UI = require("./utils/UI");

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

  printUserLottoList() {
    UI.print(`${this.userLottoArr.length}${BUY_LOTTO.PURCHASE}`);
    this.userLottoArr.forEach((currentLotto) => {
      UI.print(`"[${currentLotto.join(", ")}]"`);
    });
  }
}

module.exports = BuyLotto;
