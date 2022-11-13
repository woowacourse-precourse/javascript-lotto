const MissionUtils = require('@woowacourse/mission-utils');

const print = content => {
  MissionUtils.Console.print(content.trim());
};

const readLine = (content, func) => {
  MissionUtils.Console.readLine(content, func);
};

const makeRandomLottoNumber = count => {
  const lottoNumbers = [];

  for (let i = 0; i < count; i++) {
    const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    lottoNumbers.push(lottoNumber);
  }
  return lottoNumbers;
};
