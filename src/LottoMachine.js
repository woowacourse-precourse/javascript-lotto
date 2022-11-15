const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE } = require("./constants");
const Lotto = require("./Lotto");

class LottoMachine {
  #lottoList;

  constructor(purchaseMoney) {
    this.validate(purchaseMoney);
    this.#lottoList = this.purchaseLotto(purchaseMoney);
  }

  validate(purchaseMoney) {
    this.validateMoney(purchaseMoney);
    this.validateIsNaN(purchaseMoney);
  }

  getLottoList() {
    return this.#lottoList; 
  }

  makeLotto() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  purchaseLotto(purchaseMoney) {
    const purchasedLottoNumber = parseInt(purchaseMoney / 1000);
    return Array.from(Array(purchasedLottoNumber),() => new Lotto(this.makeLotto()));
  }

  validateMoney(purchaseMoney) {
    if(Number(purchaseMoney) < 1000) {
      throw ERROR_MESSAGE.PURCHASE_MONEY_ERROR;
    }
  }

  validateIsNaN(purchaseMoney) {
    if(isNaN(Number(purchaseMoney))) {
      throw ERROR_MESSAGE.PURCHASE_IS_NAN_ERROR;
    }
  }
}

module.exports = LottoMachine;