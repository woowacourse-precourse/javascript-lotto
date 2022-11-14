const { RANKING, UNIT_OF_AMOUNT } = require('../constants/gameSetting');
const calculateProfitRate = require('./calculateProfitRate');

function collectLottoStatistics(lottosResult) {
  let totalPrizeMoney = 0;
  const totalPurchaseAmount = lottosResult.length * UNIT_OF_AMOUNT;
  const lottoStatistics = Object.values(RANKING).reduce(
    (acc, { NAME }) => ({ ...acc, [NAME]: 0 }),
    {}
  );

  lottosResult.forEach(({ PRIZE_MONEY, NAME }) => {
    totalPrizeMoney += PRIZE_MONEY;
    lottoStatistics[NAME] += 1;
  });

  lottoStatistics.profitRate = calculateProfitRate(totalPrizeMoney, totalPurchaseAmount);
  return lottoStatistics;
}

module.exports = collectLottoStatistics;
