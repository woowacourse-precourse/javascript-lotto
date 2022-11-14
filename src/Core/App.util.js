const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");
const { MONEY_INFO } = require("./App.const");

const buyLottos = (lottoLength) =>
  Array.from({ length: lottoLength }, (x) => {
    const input = Random.pickUniqueNumbersInRange(1, 45, 6);
    input.sort((a, b) => a - b);
    return new Lotto(input);
  });

const getStatistics = (counts) => {
  const result = [0, 0, 0, 0, 0];
  counts.forEach((count) => count - 3 >= 0 && result[count - 3]++);
  return result;
};

const getRateOfReturn = (cost, revenue) => ((revenue / cost) * 100).toFixed(1);

const getRevenue = (statistics) =>
  statistics.reduce((acc, cur, i) => {
    return cur ? acc + MONEY_INFO[i].price : acc;
  }, 0);

exports.buyLottos = buyLottos;
exports.getStatistics = getStatistics;
exports.getRateOfReturn = getRateOfReturn;
exports.getRevenue = getRevenue;
