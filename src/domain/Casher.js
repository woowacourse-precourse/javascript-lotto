const { LOTTO, CASHER, LOTTO_RESULT, RESULT_MESSAGES } = require('../constants');
const Io = require('../infrastructure/io');
const { validateMoney } = require('../utils/validators/InputValidator');

class Casher {
  static ranks = new Map();
  static #profit = null;
  static #purchaseMoney = 0;

  static getMoney(message, afterGetMoney) {
    return Io.input(message, (money) => {
      validateMoney(money);
      Casher.#purchaseMoney = Number(money);
      afterGetMoney(Casher.#purchaseMoney);
    });
  }

  static getPurchasableQuantity(purchaseAmount) {
    const quantity = purchaseAmount / LOTTO.TICKET_PRICE;
    return quantity;
  }

  static noticePurchasedQuantity(quantity) {
    return Io.output(`${quantity}${CASHER.NOTICE_PURCHASE_QUANTITY}`);
  }

  static setResults(ranks) {
    ranks.map((rank) => Casher.ranks.set(rank, (Casher.ranks.get(rank) || 0) + 1));
    this.#setProfit(ranks);
  }

  static #setProfit(ranks) {
    const wholePrize = ranks.reduce((acc, rank) => acc + LOTTO_RESULT.RANK_PRIZE[rank], 0);
    const profit = (wholePrize / this.#purchaseMoney) * 100;
    this.#profit = profit.toFixed(2).replace(/\.?0+$/, '');
  }

  static noticeResult() {
    Io.output(`${LOTTO_RESULT.NOTICE_RESULT_TITLE}`);
    Object.entries(RESULT_MESSAGES).reverse()
      .forEach(([rank, message]) => {
        Io.output(`${message} - ${Casher.ranks.get(Number(rank)) || 0}개`);
      });
  }

  static noticeProfit() {
    return Io.output(`총 수익률은 ${this.#profit}%입니다.`);
  }
}

module.exports = Casher;
