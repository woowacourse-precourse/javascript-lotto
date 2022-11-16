const Lotto = require("./Lotto");
const LottoGenerator = require("./LottoGenerator");
const { ERROR_MSG, paymentMsg, LOTTO } = require("./utils/string");
const Validation = require("./utils/Validation");
const WConsole = require("./utils/WConsole");

class Payment {
  #money;
  #lottoTicket;
  constructor(money) {
    this.validate(money);
    this.#money = parseInt(money, 10);
    this.#lottoTicket = this.calculateLottoTicket(money);
  }
  validate(money) {
    Validation.throwError(isNaN(money), ERROR_MSG.PAYMENT_VAL_NUMBER);
    Validation.throwError(
      parseInt(money, 10) % LOTTO.PRICE !== 0,
      ERROR_MSG.PAYMENT_VAL_UNIT
    );
  }
  calculateLottoTicket(money) {
    let ticket = money / LOTTO.PRICE;
    WConsole.print(paymentMsg(ticket));
    return ticket;
  }
  issueLotto() {
    let lotto = new Lotto(LottoGenerator.createLottoNumbers());
    WConsole.print(`[${lotto.getNumbers().join(", ")}]`);
    return lotto;
  }
  issueLottos() {
    let lottos = [];
    for (let i = 0; i < this.#lottoTicket; i++) {
      let lotto = this.issueLotto();
      lottos.push(lotto);
    }
    return lottos;
  }
}

module.exports = Payment;
