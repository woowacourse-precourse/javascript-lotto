const {
  sortLotteryNumbers,
  createLotteryTicket,
  printMyLotteries,
  changeToNumbersArray,
  getLotteryResult,
  printResult,
} = require('../src/utils/lotteryHandler');

describe('lotteryHandlerTest', () => {
  test('생성한 로또의 배열을 오름차순으로 정렬한다.', () => {
    const array = [1, 3, 2, 4, 6, 5];
    const sortedArray = sortLotteryNumbers(array);
    expect(sortedArray).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
