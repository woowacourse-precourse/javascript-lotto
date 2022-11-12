const LottoTicket = require('../lotto/LottoTicket');
const WinningLotto = require('../lotto/WinningLotto');
const Prize = require('./Prize');
const InstanceException = require('../../exception/InstanceException');

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

  static from(lottoTicket, winningLotto) {
    return new Result(lottoTicket, winningLotto);
  }

  static validate(lottoTicket, winningLotto) {
    if (!(lottoTicket instanceof LottoTicket)) {
      throw new InstanceException('LottoTicket');
    }

    if (!(winningLotto instanceof WinningLotto)) {
      throw new InstanceException('WinningLotto');
    }
  }

  getPrizes() {
    return this.#prizes;
  }

  getProfit(lottoAmount) {
    return (
      (this.#prizeMoney * Result.#PROFIT.percentage) / lottoAmount
    ).toFixed(Result.#PROFIT.decimalPoint).toLocaleString();
  }

  #initializePrizes() {
    const { values } = Object;
    values(Prize).forEach((prize) => {
      this.#prizes.set(prize, 0);
    });
  }

  #countPrize() {
    this.lottoTicket.getLottos().forEach((lotto) => {
      const matchCount = this.winningLotto.countSameNumber(lotto);
      const isBonus = lotto.includes(this.winningLotto.getBonusNumber());
      const prize = Prize.getPrize(matchCount, isBonus);
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
