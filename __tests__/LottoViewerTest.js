const MissionUtils = require('@woowacourse/mission-utils');
const LottoViewer = require('../src/LottoViewer');
const Customer = require('../src/Customer');
const Lotto = require('../src/Lotto')

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또뷰어 클래스 테스트', () => {
  const lottoViewer = new LottoViewer();
  test('printLottoPurchaseResult 메서드를 이용해 로또 구매 결과를 출력할 수 있다.', () => {
    const logs = ['1개를 구매했습니다.', '[1, 2, 3, 4, 5, 6]'];
    const logSpy = getLogSpy();
    const customer = new Customer();
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    customer.purchaseLotto(lotto);
    const purchaseResult = customer.list()
    lottoViewer.printLottoPurchaseResult(purchaseResult);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('로또의 등수 총합과 구매 금액을 입력하면 1~5등 당첨 매수, 수익률을 반환한다.', () => {
    const ranks = [5, 7, 7, 6, 6, 7, 6, 6];
    const list = lottoViewer.arrangeLottoWinningResult(ranks, 8000);
    expect(list[5] === 1 && list['returnRate'] === '62.5').toBeTruthy();
  });

  test('로또 당첨 확인 결과를 바탕으로 당첨 통계 문구가 출력된다.', () => {
    const logs = [
      '당첨 통계',
      '---',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.'
    ];
    const logSpy = getLogSpy();
    const result = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 1,
      6: 4,
      7: 3,
      returnRate: '62.5'
    };
    lottoViewer.printLottoWinningStats(result);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
