const { MAX_COUNT, RANGE } = require('./models/Lotto');

const createRandomNumbers = () => {
  const numbers = Random.pickUniqueNumbersInRange(
    RANGE.START,
    RANGE.END,
    MAX_COUNT
  );
  if (!numbers) throw new Error(ERROR_MESSAGES.EMPTY_NUMBERS);
  return numbers.sort((a, b) => a - b);
};

module.exports = { createRandomNumbers };
