const MissionUtils = require('@woowacourse/mission-utils');
const Consumer = require('../src/Components/Consumer');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Consumer 클래스 테스트', () => {
  test('숫자가 아닌 값을 입력하면 예외가 발생한다', () => {
    // 평가
    expect(() => {
      new Consumer('오류지롱');
    }).toThrow('[ERROR]');
    expect(() => {
      new Consumer('plzgivemeErrorsXD');
    }).toThrow('[ERROR]');
    expect(() => {
      new Consumer('numberw1thstr1ng');
    }).toThrow('[ERROR]');
  });

  test('1000원 단위의 입력을 하지 않으면 예외가 발생한다.', () => {
    // 평가
    expect(() => {
      new Consumer(15);
    }).toThrow('[ERROR]');
    expect(() => {
      new Consumer(2550);
    }).toThrow('[ERROR]');
    expect(() => {
      new Consumer(30010);
    }).toThrow('[ERROR]');
  });

  test('로또 번호는 오름차순으로 정렬 후 출력한다.', () => {
    // 조건
    mockRandoms([
      [8, 7, 6, 5, 4, 3],
      [5, 7, 6, 9, 11, 10],
      [19, 18, 11, 12, 14, 13],
    ]);
    const logs = ['[3, 4, 5, 6, 7, 8]', '[5, 6, 7, 9, 10, 11]', '[11, 12, 13, 14, 18, 19]'];
    const logSpy = getLogSpy();
    const consumer = new Consumer(3000);

    // 평가
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
