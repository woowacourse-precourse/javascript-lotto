const { Console, Random } = require('@woowacourse/mission-utils');

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

module.exports = { print, readLine, makeLottoNumber };
