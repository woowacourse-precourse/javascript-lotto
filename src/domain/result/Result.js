const LottoTicket = require('../lotto/LottoTicket');
const WinningLotto = require('../lotto/WinningLotto');
const Prize = require('./Prize');
const Validation = require('../../util/Validation');

class Result {
  static #PROFIT = Object.freeze({
    percentage: 100,
    decimalPoint: 1,
  });

  #prizes = new Map();

  #prizeMoney = 0;

  constructor(lottoTicket, winningLotto) {
    Result.validate(lottoTicket, winningLotto);
    this.#prizes = new Map();
    this.lottoTicket = lottoTicket;
    this.winningLotto = winningLotto;
    this.#initializePrizes();
    this.#countPrize();
    this.#setPrizeMoney();
  }

  static validate(lottoTicket, winningLotto) {
    Validation.checkInstance(lottoTicket, LottoTicket);
    Validation.checkInstance(winningLotto, WinningLotto);
  }

  getProfit(lottoAmount) {
    return (
      (this.#prizeMoney * Result.#PROFIT.percentage) / lottoAmount
    ).toFixed(Result.#PROFIT.decimalPoint).toLocaleString();
  }

  toStringPrizes() {
    const prizes = [...this.#prizes].splice(1);
    return prizes.map(([prize, count]) => Prize.toString(prize, count)).join('\n');
  }

  #initializePrizes() {
    const { values } = Object;
    values(Prize).forEach((prize) => {
      this.#prizes.set(prize, 0);
    });
  }

  #countPrize() {
    this.lottoTicket.forEach((lotto) => {
      const matchCount = this.winningLotto.countSameNumber(lotto);
      const isBonus = lotto.includes(this.winningLotto.getBonusNumber());
      const prize = Prize.match(matchCount, isBonus);
      const newValue = this.#prizes.get(prize) + 1;
      this.#prizes.set(prize, newValue);
    });
  }

  #setPrizeMoney() {
    this.#prizes.forEach((value, key) => {
      const { amount } = key;
      this.#prizeMoney += amount * value;
    });
  }
}

module.exports = Result;
