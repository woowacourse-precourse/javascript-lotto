const MissionUtils = require("@woowacourse/mission-utils");

const getLottoNumber = (userInputPrice) => {
  return userInputPrice / 1000;
};

module.exports = {
  getLottoNumber,
};
