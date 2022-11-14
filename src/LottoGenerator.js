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

module.exports = {
  getLottoNumber,
  makeLottoArray,
  calculateProfit,
};
