const { Console, Random } = require('@woowacourse/mission-utils');
const { PRIZE } = require('./const.js');

const print = content => {
  Console.print(content);
};

const readLine = content => {
  return new Promise(resolve => Console.readLine(content, input => resolve(input)));
};

const makeLottoNumber = count => {
  const lottoNumbers = [];

  for (let i = 0; i < count; i++) {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);

    lottoNumbers.push(lottoNumber);
  }
  return lottoNumbers;
};

const closeReadLine = () => Console.close();

const templeteLotto = (prize, count) => {
  const { correctCount, reward } = PRIZE[prize];
  const rewardLocalString = reward.toLocaleString();

  if (prize === 'second')
    return `${correctCount}개 일치, 보너스 볼 일치 (${rewardLocalString}원) - ${count}개`;
  return `${correctCount}개 일치 (${rewardLocalString}원) - ${count}개`;
};

module.exports = { print, readLine, makeLottoNumber, closeReadLine, templeteLotto };
