const MissionUtils = require('@woowacourse/mission-utils');
const Tickets = require('../src/services/Tickets');

const mockRandoms = numbers => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('Tickets 클래스 테스트', () => {
  test('로또 1개를 생성하면 1개의 로또만 생성된다.', () => {
    mockRandoms([[8, 21, 23, 41, 42, 43]]);

    const result = [[8, 21, 23, 41, 42, 43]];

    expect(Tickets.publish(1)).toEqual(result);
  });

  test('로또 4개를 생성하면 4개의 로또만 생성된다.', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
    ]);

    const result = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
    ];

    expect(Tickets.publish(4)).toEqual(result);
  });

  test('로또 8개를 생성하면 8개의 로또만 생성된다.', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);

    const result = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    expect(Tickets.publish(8)).toEqual(result);
  });
});
