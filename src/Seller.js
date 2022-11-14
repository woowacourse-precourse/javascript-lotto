const Lotto = require("./Lotto");
const Buyer = require("./Buyer");
const Statistic = require("./Statistic");
const Io = require("./utils/Io");
const Validator = require("./utils/Validator");
const { LOTTO_AMOUNT, LOTTO_NUMBER } = require("./constants/index");
const MissionUtils = require("@woowacourse/mission-utils");

const Seller = ((_) => {
  const Private = Symbol();
  return class {
    #io;
    #buyer;
    #statistic;
    constructor() {
      this.#io = Io;
      this.#buyer = new Buyer();
      this.#statistic = new Statistic();
    }

    requestLottoSale() {
      this.#io.readline("구입금액을 입력해주세요.\n", this.#handleLottoSale.bind(this));
    }

    requestLottoWinNumber() {
      this.#io.readline("\n당첨 번호를 입력해 주세요.\n", this.#handleLottoWinNumber.bind(this));
    }

    requestLottoBonusNumber() {
      this.#io.readline("\n보너스 번호를 입력해 주세요.\n", this.#handleLottoBonusNumber.bind(this));
    }

    #handleLottoSale(amount) {
      if (!this.validateAmount(amount)) this.#io.close();
      this[Private] = { buyLottoNumber: Number(amount) / LOTTO_AMOUNT.VALID_UNIT };
      Object.assign(this[Private], { lottos: this.#generateLottos() });
      const { buyLottoNumber, lottos } = this[Private];
      this.#buyer.outputView({ buyLottoNumber, lottos });
      this.requestLottoWinNumber();
    }

    #handleLottoWinNumber(winNumber) {
      this.validateWinNumber(winNumber);
      Object.assign(this[Private], { winNumber });
      this.requestLottoBonusNumber();
    }

    #handleLottoBonusNumber(bonusNumber) {
      this.validateBonusNumber(bonusNumber);
      Object.assign(this[Private], { bonusNumber: Number(bonusNumber) });
      const { winNumber, bonusNumber, lottos } = this[Private];
      this.#statistic.outputView({ lottos, winNumber, bonusNumber });
      this.#io.close();
    }

    #generateLottos() {
      const { buyLottoNumber } = this[Private];
      return Array(buyLottoNumber).fill(0).map(this.#generateLotto);
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

    validateWinNumber(winNumber) {
      const numbers = winNumber.split(",").map(Number);
      const comma = winNumber.split(/\d/).join("");
      Validator.isLength(numbers, 6).isLength(comma, 5).isLength(winNumber, 11);
      return true;
    }

    validateBonusNumber(bonusNumber) {
      Validator.isLength(bonusNumber, 1).isNumber(Number(bonusNumber));
      return true;
    }
  };
})();

new Seller().requestLottoBuy();

module.exports = Seller;
