const Lotto = require('../src/Lotto');
const Statistics = require('../src/Statistics');

const statistics = new Statistics();

describe('통계 클래스 테스트', () => {
  const myLotto = [
    new Lotto([3, 4, 5, 6, 7, 8]),
    new Lotto([4, 5, 6, 7, 8, 9]),
  ];
  const winningNumbers = new Set([1, 2, 3, 4, 5, 6]);
  const bonusNumber = 7;

  statistics.purchaseAmount = myLotto.length * 1000;
  statistics.set(myLotto, winningNumbers, bonusNumber);

  test('로또 2개를 구입해서 4등, 5등에 1개씩 당첨된 경우 수익은 55,000원이다.', () => {
    expect(statistics.earning).toEqual(55000);
  });

  test('로또 2개를 구입해서 4등, 5등에 1개씩 당첨된 경우 수익률은 2,750.0%이다.', () => {
    expect(statistics.earningRate).toEqual('2,750.0');
  });
});
