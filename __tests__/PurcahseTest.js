const PurChase = require('../src/Purchase');
const MissionUtils = require('@woowacourse/mission-utils');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('금액 테스트 오류 확인', () => {
  test('금액이 숫자인지 확인', () => {
    const answers = ['1200DF', 'hello', '1,2,3,4,5', '10000원', '10000.0'];
    answers.forEach((answer) => {
      expect(() => {
        new PurChase(answer).showLotteryTickets();
      }).toThrow('[ERROR]');
    });
  });

  test('로또의 최소 금액 테스트', () => {
    const answers = ['0', '200', '999'];
    answers.forEach((answer) => {
      expect(() => {
        new PurChase(answer).showLotteryTickets();
      }).toThrow('[ERROR]');
    });
  });

  test('1000원으로 나누어떨어지는 테스트', () => {
    const answers = ['1200', '15200', '2100', '001000', '999000.9'];
    answers.forEach((answer) => {
      expect(() => {
        new PurChase(answer).showLotteryTickets();
      }).toThrow('[ERROR]');
    });
  });

  test('1000원으로 나누어떨어지는 테스트', () => {
    const answers = ['1200', '15200', '2100', '001000', '999000.9'];
    answers.forEach((answer) => {
      expect(() => {
        new PurChase(answer).showLotteryTickets();
      }).toThrow('[ERROR]');
    });
  });

  test('1000원으로 나누어떨어지는 테스트', () => {
    const answers = ['1200', '15200', '2100', '001000', '999000.9'];
    answers.forEach((answer) => {
      expect(() => {
        new PurChase(answer).showLotteryTickets();
      }).toThrow('[ERROR]');
    });
  });
});

describe('로또 티켓 출력 개수 확인', () => {
  test('3000원 일 경우', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
    const result = new PurChase('3000').showLotteryTickets();
    expect(result).toEqual([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
  });

  test('만원일 경우', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
      [3, 4, 5, 6, 12, 23, 35],
      [16, 17, 31, 34, 36, 40],
    ]);
    const result = new PurChase('10000').showLotteryTickets();
    expect(result).toEqual([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
      [3, 4, 5, 6, 12, 23, 35],
      [16, 17, 31, 34, 36, 40],
    ]);
  });
});
