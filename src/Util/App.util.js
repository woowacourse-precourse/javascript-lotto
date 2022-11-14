const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");

const buyLottos = (lottoLength) =>
  Array.from({ length: lottoLength }, (x) => {
    const input = Random.pickUniqueNumbersInRange(1, 45, 6);
    input.sort((a, b) => a - b);
    return new Lotto(input);
  });

const getStatistics = () => {};
const getRateOfReturn = () => {};

exports.buyLottos = buyLottos;
exports.getStatistics = getStatistics;
exports.getRateOfReturn = getRateOfReturn;
