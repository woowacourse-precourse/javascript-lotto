const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoMachineValidator = require("./validator/LottoMachineValidator");

class LottoMachine {
  #lottoList;

  constructor(purchaseMoney) {
    this.validate(purchaseMoney);
    this.#lottoList = this.purchaseLotto(purchaseMoney);
  }

  validate(purchaseMoney) {
    const validator = new LottoMachineValidator();
    validator.validateMoney(purchaseMoney);
    validator.validateIsNaN(purchaseMoney);
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
}

module.exports = LottoMachine;