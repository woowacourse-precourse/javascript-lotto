const {
  PURCHASE_AMOUT_REGEX,
  ERR_MSG,
  PRINT_SENTENSE
} = require('./constants');
const Io = require('./Io');
const Lotto = require('./Lotto');

class User {
  #purchaseAmout;

  #lottoList;

  constructor(purchaseMoney) {
    this.validate(purchaseMoney);
    this.#purchaseAmout = +purchaseMoney / 1000;
    Io.printConsole(this.#purchaseAmout + PRINT_SENTENSE.purchaseAmout);
    this.#lottoList = [];
    for (let i = 0; i < this.#purchaseAmout; i += 1) {
      this.#lottoList.push(Lotto.makeLotto());
    }
    this.#lottoList.forEach(lotto => Io.printConsole(`[${lotto.join(', ')}]`));
  }

  get purchaseAmout() {
    return this.#purchaseAmout;
  }

  get lottoList() {
    return this.#lottoList;
  }

  validate(purchaseMoney) {
    if (!PURCHASE_AMOUT_REGEX.test(purchaseMoney)) {
      throw new Error(ERR_MSG.invalidPurchaseMoney);
    }
  }
}

module.exports = User;
