const StaticLotto = require('../src/staticLotto');
const Lotto = require('../src/Lotto');

describe('당첨 통계 테스트', () => {
  test('랜덤으로 발행된 로또와 당첨 로또를 비교해 순위 정리', () => {
    const rankTest = new StaticLotto();

    const rank = {
      rankOne: 0,
      rankTwo: 0,
      rankThree: 1,
      rankFour: 1,
      rankFive: 1,
    };

    rankTest.setLottoList([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 42],
      [3, 8, 11, 32, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);

    rankTest.setWinLotto(new Lotto([3, 5, 11, 16, 32, 42]));

    rankTest.setBonusNumber(45);

    rankTest.getSameNumberCount();

    expect(rankTest.getRank()).toEqual(rank);
  });

  test('총 수익률 계산', () => {
    const rankTest = new StaticLotto();

    rankTest.setLottoList([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 42],
      [3, 8, 11, 32, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);

    rankTest.setWinLotto(new Lotto([3, 5, 11, 16, 32, 42]));

    rankTest.setBonusNumber(45);

    rankTest.getSameNumberCount();

    rankTest.getRank();

    rankTest.setPurchasePrice(3000);

    expect(rankTest.setTotalRevenue()).toEqual('51833.3');
  });

});
