const MissionUtils = require('@woowacourse/mission-utils');
const LottoAmount = require('../src/Lotto/LottoAmount');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 발행 함수 테스트', () => {

  test('입력된 금액에 맞는 수량이 콘솔에 출력되어야 한다.', () => {
    const money = 5000;
    const logSpy = getLogSpy();
    const log = '5개를 구매했습니다';
    const lottoAmount = new LottoAmount(money);
    
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });

  test('입력된 금액만큼 로또가 발행되고 로또 번호들이 콘솔에 출력되어야 한다.', () => {
    const money = 5000;
    const logSpy = getLogSpy();
    const log = '5개를 구매했습니다';
    const lottoAmount = new LottoAmount(money);

    lottoAmount.publishUserLotto();
    // 로또 번호 목록 출력 이전에 print 되는 메세지까지 포함하여 총 6번 호출되어야 한다.
    expect(logSpy).toBeCalledTimes(6);
  });
});