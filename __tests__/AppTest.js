/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
const MissionUtils = require('@woowacourse/mission-utils');
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

  test('setWinningNumbers에서 값이 입력과 동일하게 변수에 할당 되었는지 테스트', () => {
    const app = new App();
    const numbersArray = [];
    for (let i = 0; i < 20; i += 1) {
      const number = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      ).join(',');
      numbersArray.push(number);
    }
    numbersArray.forEach(numbers => {
      app.setWinningNumbers(numbers);
      expect(app.winningNumbers.length).toBe(6);
    });
  });

  test('setBonusNumber에서 app.bonusNumber에 값이 제대로 할당 되었는지 테스트', () => {
    const app = new App();

    const number = MissionUtils.Random.pickNumberInRange(1, 45);

    app.setBonusNumber(number);
    expect(app.bonusNumber).toBe(number);
  });
});
