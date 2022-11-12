const LottoTicket = require('../lotto/LottoTicket');
const WinningLotto = require('../lotto/WinningLotto');
const Prize = require('./Prize');
const InstanceException = require('../../exception/InstanceException');

class Result {
  #prizes = new Map();

  constructor(lottoTicket, winningLotto) {
    Result.validate();
    this.#prizes = new Map();
    this.lottoTicket = lottoTicket;
    this.winningLotto = winningLotto;
    this.#initializePrizes();
    this.#countPrize();
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

  getProfit() {

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
}

module.exports = Result;
