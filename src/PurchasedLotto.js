const LottoMachine = require("./controller/LottoMachine");
const LottoMachineValidator = require("./validator/LottoMachineValidator");

class PurchasedLotto {
  #lottoList;

  constructor(purchaseMoney) {
    this.validate(purchaseMoney);
    this.#lottoList = new LottoMachine().purchaseLotto(purchaseMoney);
  }

  validate(purchaseMoney) {
    const validator = new LottoMachineValidator();
    validator.validateMoney(purchaseMoney);
    validator.validateIsNaN(purchaseMoney);
  }

  getLottoList() {
    return this.#lottoList; 
  }
}

module.exports = PurchasedLotto;