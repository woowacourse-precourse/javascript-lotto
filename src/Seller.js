const Io = require("./utils/Io");
const Validator = require("./utils/Validator");

const Seller = ((_) => {
  const Private = Symbol();
  return class {
    #io;
    constructor() {
      this.#io = Io;
    }

    requestLottoBuy() {
      this.#io.readline("구입금액을 입력해주세요.", (amount) => {
        if (!Validator.isValidAmount(amount)) this.#io.close();
      });
    }
  };
})();

new Seller().requestLottoBuy();

module.exports = Seller;
