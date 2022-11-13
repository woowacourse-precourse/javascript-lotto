const MissionUtils = require('@woowacourse/mission-utils');

const print = content => {
  MissionUtils.Console.print(content);
};

const readLine = (content, func) => {
  MissionUtils.Console.readLine(content, func);
};

const makeLottoNumber = count => {
  const lottoNumbers = [];

  for (let i = 0; i < count; i++) {
    const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );

    lottoNumbers.push(lottoNumber);
  }
  return lottoNumbers;
};

module.exports = { print, readLine, makeLottoNumber };
