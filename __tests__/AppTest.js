const App = require('../src/App');
const { PRIZE, PRIZE_MONEY } = require('../src/Constants');

describe('App 클래스 - 상금 총합 테스트', () => {
  test('상금 기록을 받아 상금 총합을 계산한다.', () => {
    const prizeRecord = { first: 1, second: 3, third: 4, fourth: 1, fifth: 3 };
    const totalPrizeMoney = App.addPrizeMoney(prizeRecord);

    expect(totalPrizeMoney).toEqual(
      prizeRecord[PRIZE.first] * PRIZE_MONEY.first +
        prizeRecord[PRIZE.second] * PRIZE_MONEY.second +
        prizeRecord[PRIZE.third] * PRIZE_MONEY.third +
        prizeRecord[PRIZE.fourth] * PRIZE_MONEY.fourth +
        prizeRecord[PRIZE.fifth] * PRIZE_MONEY.fifth
    );
  });

  App.finish();
});
