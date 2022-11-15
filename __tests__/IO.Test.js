const IO = require('../src/IOControl');
const MissionUtils = require('@woowacourse/mission-utils');

describe('IO 테스트', () => {
  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
  };
  const logSpy = getLogSpy();

  test('로또 갯수 출력', () => {
    IO.printLottoBuy(10);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('10개를 구매했습니다.')
    );
  });

  test('로또 번호 출력', () => {
    IO.printLotto([8, 21, 23, 41, 42, 43]);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('[8, 21, 23, 41, 42, 43]')
    );
  });

  test('로또 당첨 결과 출력', () => {
    IO.printPrize(6, 1);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('6개 일치 (2,000,000,000원) - 1개')
    );
  });

  test('수익률 출력', () => {
    IO.printProfit(100);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('총 수익률은 100%입니다.')
    );
  });
});
