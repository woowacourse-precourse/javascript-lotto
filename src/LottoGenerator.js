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

module.exports = {
  getLottoNumber,
  makeLottoArray,
};
