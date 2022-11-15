const { validate, isPurchaseInput } = require('./Validator');
const { LOTTO_BASE } = require('./constants');
const Lotto = require('./Lotto');

class LottoStore {
  static sellLottoTickets(amount) {
    validate(amount, isPurchaseInput);
    const soldTickets = LottoStore.generateLottoTickets(amount);
    return soldTickets;
  }

  static generateLottoTickets(amount) {
    const count = Number(amount) / LOTTO_BASE.PRICE;
    return Array.from({ length: count }, Lotto.generateTicket);
  }
}

module.exports = LottoStore;
