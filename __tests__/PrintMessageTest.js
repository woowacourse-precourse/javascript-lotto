const MissionUtils = require('@woowacourse/mission-utils');
const PrintMessage = require('../src/Utils/PrintMessage');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('PrintMessage 테스트', () => {
  test('printWinLottery 검증', () => {
    // 조건
    const testWinList = [1, 1, 0, 0, 0, 0];
    const logs = [
      '3개 일치 (5,000원) - 0개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];

    // 실행
    const logSpy = getLogSpy();
    PrintMessage.printWinLottery(testWinList);

    // 평가
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('printProfit 검증', () => {
    // 조건
    const testTotal = 5000;
    const testMoney = 10000;
    const logs = ['총 수익률은 50.0%입니다.'];

    // 실행
    const logSpy = getLogSpy();
    PrintMessage.printProfit(testTotal, testMoney);

    // 평가
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
