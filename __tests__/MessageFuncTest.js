const MessageFunc = require('../src/MessageFunc');
const MissionUtils = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
describe('메세지 객체 메서드 테스트', () => {
  test('로또 구매후 출력 테스트', () => {
    const logs = [
      '3개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
    ];
    const logSpy = getLogSpy();
    MessageFunc.BOUGHTLOTTO(3, [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });

  test('수익률 출력 테스트', () => {
    const log = '총 수익률은 101,500,000.0%입니다.';
    const logSpy = getLogSpy();
    MessageFunc.YIELD([2, 1], 2);
    expect(logSpy).toHaveBeenCalledWith(log);
  });

  test('당첨 결과 출력 테스트', () => {
    const logs = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 1개',
      '5개 일치 (1,500,000원) - 1개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
      '총 수익률은 20,315,550.0%입니다.',
    ];
    const logSpy = getLogSpy();
    MessageFunc.RESULT([1, 2, 3, 4, 5, null, null, null, null, null], 10);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });
});
