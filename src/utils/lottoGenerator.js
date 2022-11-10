const { Random } = require('@woowacourse/mission-utils');

const lottoGenerator = {};

lottoGenerator.getNumbers = () => {
  const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return lottoGenerator.sortDescendingNumbers(numbers);
};

lottoGenerator.getTimes = (number) => {
  let times = number;
  const lotto = [];
  while (times > 0) {
    lotto.push(lottoGenerator.getNumbers());
    times -= 1;
  }
  return lotto;
};

lottoGenerator.sortDescendingNumbers = (numbers) => numbers.sort((a, b) => (a > b ? 1 : -1));

module.exports = lottoGenerator;
