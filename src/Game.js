const { Random } = require('@woowacourse/mission-utils');
const { GAME_RANGE, PRIZES, STAT_PHRASE, PRIZE_CONFIG } = require('./config');

class Game {
  #lottos = [];
  #winningNumbers = [];
  #bonusNUmber = 0;

  constructor() {
    this.result = {};
  }

  set lottos(lottos) {
    this.#lottos = lottos;
  }

  generateOneLotto() {
    const oneLotto = Random.pickUniqueNumbersInRange(
      GAME_RANGE.RANGE_MIN,
      GAME_RANGE.RANGE_MAX,
      GAME_RANGE.NUM_LENGTH,
    ).sort((a, b) => a - b);
    return oneLotto;
  }
}

const generateLottoStat = (budget, ranks) => {
  const totalValue = ranks.reduce((acc, rank) => acc + PRIZES[rank].VALUE, 0);
  const profitRate = ((totalValue / budget) * 100).toFixed(2);

  return profitRate;
};

module.exports = Game;
