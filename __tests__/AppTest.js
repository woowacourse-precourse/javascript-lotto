/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
const App = require('../src/App');

describe('App 클래스 테스트', () => {
  test('LottoCount를 정확하게 계산하는가에대한 테스트', () => {
    const app = new App();
    app.getLottoCount(3000);

    expect(app.lottoCount).toBe(3);
  });

  test('issueLottos 이후에 LottoCount 수에 맞게 Lotto가 발급되었는지 테스트', () => {
    const answer = [];

    const lottoCountArray = [27, 37, 8, 3300];

    lottoCountArray.forEach(cnt => {
      const app = new App();
      app.lottoCount = cnt;
      app.issueLottos();
      answer.push(app.lottos.length);
    });

    expect(answer).toStrictEqual(lottoCountArray);
  });
});
