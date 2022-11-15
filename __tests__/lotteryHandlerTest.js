const MissionUtils = require('@woowacourse/mission-utils');
const { sortLotteryNumbers, createLotteryTicket, changeToNumbersArray } = require('../src/controllers/lottoController');
const { printTickets } = require('../src/controllers/UIController');

const createMockTickets = jest.fn(() => [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
]);

const mockInput = jest.fn(() => '4,8,13,22,24,35');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('lotteryHandlerTest', () => {
  test('생성한 로또의 배열을 오름차순으로 정렬한다.', () => {
    const array = [1, 3, 2, 4, 6, 5];
    const sortedArray = sortLotteryNumbers(array);
    expect(sortedArray).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('새로 생성한 로또 티켓의 길이는 여섯자리이다.', () => {
    const newTicket = createLotteryTicket();
    expect(newTicket.length).toBe(6);
  });

  test('로또 번호를 출력한다.', () => {
    const tickets = createMockTickets();
    const logSpy = getLogSpy();
    const logs = ['3개를 구매했습니다.', '[1, 2, 3, 4, 5, 6]', '[7, 8, 9, 10, 11, 12]', '[13, 14, 15, 16, 17, 18]'];
    printTickets(tickets);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외처리 된 문자열을 숫자 배열로 변환한 길이는 6이다.', () => {
    const inputString = mockInput();
    console.log(inputString);
    const convertedNumberArray = changeToNumbersArray(inputString);
    expect(convertedNumberArray.length).toBe(6);
  });
});
