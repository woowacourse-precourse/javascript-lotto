const Lotto = require("./Lotto");
const Buyer = require("./Buyer");
const Statistic = require("./Statistic");
const Io = require("./utils/Io");
const Validator = require("./utils/Validator");
const { LOTTO_AMOUNT, LOTTO_NUMBER, MESSAGE } = require("./constants/index");
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

    saleLotto() {
      this.#requestLottoSale();
    }

    #requestLottoSale() {
      this.#io.readline(MESSAGE.SELLER.SALE, this.#handleLottoSale.bind(this));
    }

    #requestLottoWinNumber() {
      this.#io.readline(MESSAGE.SELLER.WINNUMBER, this.#handleLottoWinNumber.bind(this));
    }

    #requestLottoBonusNumber() {
      this.#io.readline(MESSAGE.SELLER.BONUSNUMBER, this.#handleLottoBonusNumber.bind(this));
    }

    #handleLottoSale(amount) {
      if (!this.validateAmount(amount)) this.#io.close();
      this[Private] = { buyLottoNumber: Number(amount) / LOTTO_AMOUNT.VALID_UNIT };
      Object.assign(this[Private], { lottos: this.#generateLottos() });
      const { buyLottoNumber, lottos } = this[Private];
      this.#buyer.outputView({ buyLottoNumber, lottos });
      this.#requestLottoWinNumber();
    }

    #handleLottoWinNumber(winNumber) {
      this.validateWinNumber(winNumber);
      Object.assign(this[Private], { winNumber });
      this.#requestLottoBonusNumber();
    }

    #handleLottoBonusNumber(bonusNumber) {
      this.validateBonusNumber(bonusNumber);
      Object.assign(this[Private], { bonusNumber: Number(bonusNumber) });
      this.#lottoResult();
    }

    #lottoResult() {
      const { winNumber, lottos, bonusNumber } = this[Private];
      this.#statistic.outputView({
        lottos,
        winNumber,
        bonusNumber,
      });
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
      const winNumbers = winNumber.split(",");
      const comma = winNumber.split(/\d/).join("");
      Validator.isLength(winNumbers, LOTTO_NUMBER.VALID_NUMBER_LENGTH).isLength(comma, LOTTO_NUMBER.VALID_COMMA_LENGTH);
      winNumbers.every(Validator.isNumber);
      winNumbers.every((number) =>
        Validator.isRange({ target: number, start: LOTTO_NUMBER.MIN_NUMBER, end: LOTTO_NUMBER.MAX_NUMBER })
      );
      return true;
    }

    validateBonusNumber(bonusNumber) {
      Validator.isNumber(Number(bonusNumber)).isRange({
        target: bonusNumber,
        start: LOTTO_NUMBER.MIN_NUMBER,
        end: LOTTO_NUMBER.MAX_NUMBER,
      });
      return true;
    }
  };
})();

module.exports = Seller;
