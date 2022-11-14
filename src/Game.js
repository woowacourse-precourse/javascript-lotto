const { Random } = require('@woowacourse/mission-utils');
const { GAME_RANGE, PRIZES } = require('./config');
const Lotto = require('./Lotto');

class Game {
  #lottos = [];
  #winningNumbers = [];
  #bonusNUmber = 0;

  constructor(lottoNum, winningNumbers, bonusNumber) {
    this.#lottos = Array.from({ length: lottoNum }, () => this.generateOneLotto());
    this.#winningNumbers = winningNumbers;
    this.#bonusNUmber = bonusNumber;
  }

  generateOneLotto() {
    return new Lotto(
      Random.pickUniqueNumbersInRange(
        GAME_RANGE.RANGE_MIN,
        GAME_RANGE.RANGE_MAX,
        GAME_RANGE.NUM_LENGTH,
      ).sort((a, b) => a - b),
    );
  }

  generateLottoStat(budget, ranks) {
    const totalValue = ranks
      .filter((rank) => rank !== Infinity)
      .reduce((acc, rank) => acc + PRIZES[rank].VALUE, 0);
    const profitRate = ((totalValue / budget) * 100).toFixed(1);

    return profitRate;
  }
}

module.exports = Game;
