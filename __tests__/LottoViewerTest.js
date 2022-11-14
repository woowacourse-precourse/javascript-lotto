const MissionUtils = require('@woowacourse/mission-utils');
const LottoViewer = require('../src/LottoViewer');

describe('로또뷰어 클래스 테스트', () => {
  const lottoViewer = new LottoViewer();
  test('로또의 등수 총합과 구매 금액을 입력하면 1~5등 당첨 매수, 수익률을 반환한다.', () => {
    const ranks = [5, 7, 7, 6, 6, 7, 6, 6];
    const list = lottoViewer.arrangeLottoWinningResult(ranks, 8000);
    expect(list[5] === 1 && list['returnRate'] === '62.5').toBeTruthy();
  });
});
