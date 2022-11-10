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
});
