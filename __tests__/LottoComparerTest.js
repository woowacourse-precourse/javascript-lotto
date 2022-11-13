const MissionUtils = require('@woowacourse/mission-utils');
const LottoComparer = require('../src/LottoComparer');

describe('로또 비교 클래스 테스트', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('로또와 구매자 로또를 비교해 로또 등수를 구한다.', () => {
    const buyerLottos = [
      [8, 22, 23, 42, 43, 45],
      [1, 2, 3, 4, 5, 6],
      [8, 22, 23, 42, 43, 44],
      [8, 22, 23, 40, 41, 42],
      [8, 21, 23, 40, 41, 42],
    ];
    const lotto = [8, 22, 23, 42, 43, 45];
    const bonusNumber = 44;
    const rank = { first: 1, second: 1, third: 0, fourth: 1, fifth: 1 };

    const result = LottoComparer.getBuyerLottoRank(buyerLottos, lotto, bonusNumber);

    expect(result).toStrictEqual(rank);
  });
});
