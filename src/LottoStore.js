const { Console } = require('@woowacourse/mission-utils');
const { validate, isPurchaseInput } = require('./Validator');
const { MESSAGE, LOTTO } = require('./constants');
const Lotto = require('./Lotto');

class LottoStore {
  #purchaseAmount = 0;

  #lottoTickets = [];

  enter() {
    Console.readLine(`${MESSAGE.PURCHASE_QUESTION}\n`, answer => {
      validate(answer, isPurchaseInput);
      this.#purchaseAmount = Number(answer);
      this.sellLottoTickets();
    });
  }

  sellLottoTickets() {
    const count = this.#purchaseAmount / LOTTO.PRICE;
    this.#lottoTickets = Array.from({ length: count }, Lotto.generateTicket);
    return this;
  }
}

module.exports = LottoStore;
