const MissionUtils = require('@woowacourse/mission-utils');

const Lotto = require('../src/Lotto');
const LottoBuyer = require('../src/LottoBuyer');
const LottoComparer = require('../src/LottoComparer');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('로또 비교 클래스 테스트', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('로또와 구매자 로또를 비교해 로또 등수를 구한다.', () => {
    const randoms = [
      [8, 22, 23, 42, 43, 45],
      [1, 2, 3, 4, 5, 6],
      [8, 22, 23, 42, 43, 44],
      [8, 22, 23, 40, 41, 42],
      [8, 21, 23, 40, 41, 42],
    ];
    const bonusNumber = 44;
    const ranking = { first: 1, second: 1, third: 0, fourth: 1, fifth: 1 };

    mockRandoms(randoms);

    const comparer = new LottoComparer(new LottoBuyer(5000), new Lotto([8, 22, 23, 42, 43, 45]));
    comparer.buyer.buyLotto();
    comparer.lotto.setBonusNumber(bonusNumber);
    comparer.setBuyerLottoRanking();

    expect(comparer.ranking).toStrictEqual(ranking);
  });

  test('당첨 금액과 구매 금액을 비교해 수익률을 구한다.', () => {
    const randoms = [
      [8, 22, 23, 42, 43, 45],
      [1, 2, 3, 4, 5, 6],
      [8, 22, 23, 42, 43, 44],
      [8, 22, 23, 40, 41, 42],
      [8, 21, 23, 40, 41, 42],
    ];
    const bonusNumber = 44;

    mockRandoms(randoms);

    const comparer = new LottoComparer(new LottoBuyer(5000), new Lotto([1, 2, 3, 4, 5, 31]));
    comparer.buyer.buyLotto();
    comparer.lotto.setBonusNumber(bonusNumber);
    comparer.setBuyerLottoRanking();
    comparer.setYield();

    expect(comparer.yield).toEqual('30000.0');
  });
});
