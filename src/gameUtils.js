const { Random } = require('@woowacourse/mission-utils');
const { GAME_RANGE, PRIZES } = require('./config');

const generateLotto = () =>
  Random.pickUniqueNumbersInRange(
    GAME_RANGE.RANGE_MIN,
    GAME_RANGE.RANGE_MAX,
    GAME_RANGE.NUM_LENGTH,
  ).sort((a, b) => a - b);

const generateLottoStat = (budget, ranks) => {
  const totalValue = ranks.reduce((acc, rank) => acc + PRIZES[rank].VALUE, 0);
  const profitRate = ((totalValue / budget) * 100).toFixed(2);

  return profitRate;
};

module.exports = { generateLotto, generateLottoStat };
