const User = require('../src/components/User');
const { ERROR, NUMBER } = require('../src/data/constants');
const MissionUtils = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('유저 입력 테스트', () => {
  test('1000원으로 나누어 떨어지는지', () => {
    expect(() => {
      new User('1234001');
    }).toThrow(ERROR.DIVIDE);
  });
  test('잘못된 범위', () => {
    expect(() => {
      new User('kangsangwon');
    }).toThrow(ERROR.RANGE);
  });
  test('잘못된 범위2', () => {
    expect(() => {
      new User('-1234001');
    }).toThrow(ERROR.RANGE);
  });
  test('잘못된 범위3', () => {
    expect(() => {
      new User('0');
    }).toThrow(ERROR.RANGE);
  });
});
describe('유저 클래스 테스트', () => {
  test('구매 제한?', () => {
    const user = new User('12000');
    expect(user.countBuyLimit()).toEqual(12);
  });
  test('수익률 계산', () => {
    const user = new User('12000');
    const map = new Map();
    map.set(6, 1);
    expect(user.calculateYield(map)).toEqual(
      (NUMBER.SIX_WINNING / 12000) * 100,
    );
  });
  test('당첨개수 확인', () => {
    const user = new User('2000');
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ]);
    user.setLottos();
    const map = new Map();
    map.set(6, 1);
    map.set(0, 1);
    expect(user.checkWinningCount([1, 2, 3, 4, 5, 6], 7)).toEqual(map);
  });
});
