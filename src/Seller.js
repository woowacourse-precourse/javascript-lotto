const Lotto = require("./Lotto");
const Buyer = require("./Buyer");
const Io = require("./utils/Io");
const Validator = require("./utils/Validator");
const { LOTTO_AMOUNT, LOTTO_NUMBER } = require("./constants/index");
const MissionUtils = require("@woowacourse/mission-utils");

const Seller = ((_) => {
  const Private = Symbol();
  return class {
    #io;
    #buyer;
    constructor() {
      this.#io = Io;
      this.#buyer = new Buyer();
    }

    requestLottoBuy() {
      this.#io.readline("구입금액을 입력해주세요.\n", this.#proceedLottoSale.bind(this));
    }

    #proceedLottoSale(amount) {
      if (!this.validateAmount(amount)) this.#io.close();
      this.#buyer.setBuyLottoNumber = amount;
      this.#buyer.setLottos = this.#giveLottos();
    }

    #giveLottos() {
      return Array(this.#buyer.buyLottoNumber).fill(0).map(this.#generateLotto);
    }

    #generateLotto() {
      return new Lotto(
        MissionUtils.Random.pickUniqueNumbersInRange(
          LOTTO_NUMBER.MIN_NUMBER,
          LOTTO_NUMBER.MAX_NUMBER,
          LOTTO_NUMBER.VALID_NUMBER_LENGTH
        )
      ).getSortedLotto();
    }

    validateAmount(amount) {
      Validator.isNumber(amount)
        .isDivisible(amount, LOTTO_AMOUNT.VALID_UNIT)
        .isGreaterOrEqual(amount, LOTTO_AMOUNT.VALID_UNIT);
      return true;
    }
  };
})();

module.exports = Seller;
