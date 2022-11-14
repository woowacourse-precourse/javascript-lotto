const MissionUtils = require("@woowacourse/mission-utils");

const getLottoNumber = (userInputPrice) => {
  return userInputPrice / 1000;
};

const makeLottoArray = (lottoCount) => {
  let lottoArray = [];
  for (let i = 0; i < lottoCount; i++) {
    lottoArray.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  return lottoArray;
};

const calculateProfit = (profit, inputMoney) => {
  return ((profit / inputMoney) * 100).toFixed(1);
};

const estimateProfit = (scoreBoard, inputMoney) => {
  let totalProfit = 0;
  const RANK_MONEY = [2000000000, 30000000, 1500000, 50000, 5000];
  scoreBoard.forEach((eachScore, index) => {
    totalProfit += RANK_MONEY[index] * eachScore;
  });
  return calculateProfit(totalProfit, inputMoney);
};

module.exports = {
  getLottoNumber,
  makeLottoArray,
  calculateProfit,
  estimateProfit,
};
