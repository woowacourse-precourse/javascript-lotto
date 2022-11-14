const { LOTTO, CASHER, LOTTO_RESULT } = require('../constants');
const Io = require('../infrastructure/io/io');
const InputValidator = require('../utils/InputValidator');

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
    // 최대 소수점 2자리까지 표현
    // 마지막 소숮점이 0이면 소수점을 제거
    this.#profit = profit.toFixed(2).replace(/\.?0+$/, '');
  }
}

module.exports = Casher;
