const Lotto = require("./Lotto");
const LottoGenerator = require("./LottoGenerator");
const { ERROR_MSG, paymentMsg } = require("./utils/string");
const Validation = require("./utils/Validation");
const WConsole = require("./utils/WConsole");

class Payment {
  #money;
  #lottoTicket;
  constructor(money) {
    this.validate(money);
    this.#money = parseInt(money);
    this.#lottoTicket = this.calculateLottoTicket(money);
  }
  validate(money) {
    Validation.throwError(isNaN(money), ERROR_MSG.PAYMENT_VAL);
    Validation.throwError(parseInt(money) % 1000 !== 0, ERROR_MSG.PAYMENT_VAL);
  }
  calculateLottoTicket(money) {
    let ticket = money / 1000;
    WConsole.print(paymentMsg(ticket));
    return ticket;
  }
  //   issueLotto() {
  //     let lotto = new LottoGenerator();
  //     return lotto.createLottoNumbers();
  //   }
  issueLottos() {
    let lottos = [];
    for (let i = 0; i < this.#lottoTicket; i++) {
      let lotto = new Lotto(LottoGenerator.createLottoNumbers());
      WConsole.print(`[${lotto.getNumbers().join(", ")}]`);
      lottos.push(lotto);
    }
    return lottos;
  }
}

module.exports = Payment;
