const Io = require("./utils/Io");
const Validator = require("./utils/Validator");
const { LOTTO_AMOUNT } = require("./constants/index");

const Seller = ((_) => {
  const Private = Symbol();
  return class {
    #io;
    constructor() {
      this.#io = Io;
    }

    requestLottoBuy() {
      this.#io.readline("구입금액을 입력해주세요.", (amount) => {
        if (!this.validateAmount(amount)) this.#io.close();
      });
    }

    validateAmount(amount) {
      Validator.isNumber(amount);
      Validator.isDivisible(amount, LOTTO_AMOUNT.VALID_UNIT);
      Validator.isGreaterOrEqual(amount, LOTTO_AMOUNT.VALID_UNIT);
      return true;
    }
  };
})();

module.exports = Seller;
