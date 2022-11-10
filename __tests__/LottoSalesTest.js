const MissionUtils = require('@woowacourse/mission-utils');
const LottoSales = require('../src/LottoSales');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('로또 판매처 클래스 테스트', () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test('로또 번호는 오름차순으로 정렬한다.', () => {
    const randoms = [[22, 8, 23, 45, 42, 43]];

    mockRandoms(randoms);

    const result = LottoSales.issueLotto();

    expect(result).toStrictEqual([8, 22, 23, 42, 43, 45]);
  });

  test('금액을 받고 구입 금액에 해당하는 만큼 로또를 발행한다.', () => {
    const money = 8_000;
    const length = money / 1000;
    const randoms = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
      [1, 3, 5, 14, 22, 45],
      [1, 3, 5, 14, 22, 45],
      [1, 3, 5, 14, 22, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    mockRandoms(randoms);

    const result = LottoSales.issueLottos(money);

    expect(result).toHaveLength(length);
  });
});
