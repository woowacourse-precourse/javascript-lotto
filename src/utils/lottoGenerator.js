const { Random } = require('@woowacourse/mission-utils');
const { LOTTO_RULE } = require('./constant');

const lottoGenerator = {};

lottoGenerator.getNumbers = () => {
  const numbers = Random.pickUniqueNumbersInRange(
    LOTTO_RULE.WINNING_NUMBERS_MIN_NUMBER,
    LOTTO_RULE.WINNING_NUMBERS_MAX_NUMBER,
    LOTTO_RULE.WINNING_NUMBERS_LENGTH,
  );
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
