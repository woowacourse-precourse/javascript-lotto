const MissionUtils = require('@woowacourse/mission-utils');
const LottoGenerator = require('../src/LottoGenerator');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoGenerator 테스트', () => {
  beforeEach(() =>
    mockRandoms([
      [3, 14, 23, 16, 1, 43],
      [16, 32, 38, 3, 5, 11],
      [7, 16, 35, 11, 36, 44],
      [1, 31, 41, 8, 11, 42],
      [13, 42, 45, 14, 16, 38],
    ])
  );

  afterAll(() => MissionUtils.Console.close());

  test('generateRandomLottoNumbers 테스트', () => {
    const result = [
      [1, 3, 14, 16, 23, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
    ];
    result.forEach((arr) => expect(LottoGenerator.generateRandomLottoNumbers()).toStrictEqual(arr));
  });

  test('getLottos 테스트', () => {
    const lottosNameArray = ['로또1', '로또2', '로또3', '로또4', '로또5'];
    const lottoNumbersArray = [
      [1, 3, 14, 16, 23, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
    ];

    const lottos = LottoGenerator.getLottos(lottoNumbersArray.length);

    expect([...lottos.keys()]).toEqual(lottosNameArray);
    [...lottos.values()].forEach((lotto, index) => {
      expect(lotto.getLottoNumbers()).toEqual(lottoNumbersArray[index]);
    });
  });
});
