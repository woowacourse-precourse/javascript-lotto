const LottoView = require('../src/LottoView');
const { Console } = require('../src/utils/missionUtil');

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('LottoView 클래스 테스트', () => {
  test('✨ 사용자가 구입 금액을 입력하면 로또 개수를 출력한다.', () => {
    const lottoView = new LottoView();
    const logs = ['\n1개를 구매했습니다.', '\n5개를 구매했습니다.'];
    const logSpy = getLogSpy();
    lottoView.printLottoCount(1000);
    lottoView.printLottoCount(5000);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });
});
