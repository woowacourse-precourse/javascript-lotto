const Statistics = require('../src/Statistics');

const statistics = new Statistics();

test('로또 당첨 확인', () => {
  const NUMBERS = [1, 2, 3, 4, 5, 6];
  const WINNING = [1, 2, 3, 4, 5, 7];
  const BONUS = 6;
  const RESULT = statistics.getResult(NUMBERS, WINNING, BONUS);
  expect(RESULT).toBe(1);
});
