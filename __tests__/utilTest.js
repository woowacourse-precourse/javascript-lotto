const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');
const { RANKING } = require('../src/constants/gameSetting');
const calculateProfitRate = require('../src/utils/calculateProfitRate');
const generateRandomLottoNumbers = require('../src/utils/generateRandomLottoNumbers');
const getLottoRanking = require('../src/utils/getLottoRanking');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('util 테스트', () => {
  test('calculateProfitRate util 테스트', () => {
    const answer = [
      [0, 1000],
      [5000, 1000],
      [50000, 5000],
      [15000, 7000],
    ];
    const result = [0, 500, 1000, 214.3];
    answer.forEach((arr, index) => expect(calculateProfitRate(...arr)).toBe(result[index]));
  });

  test('generateRandomLottoNumbers util 테스트', () => {
    mockRandoms([
      [3, 14, 23, 16, 1, 43],
      [16, 32, 38, 3, 5, 11],
      [7, 16, 35, 11, 36, 44],
      [1, 31, 41, 8, 11, 42],
      [13, 42, 45, 14, 16, 38],
    ]);

    const result = [
      [1, 3, 14, 16, 23, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
    ];
    result.forEach((arr) => expect(generateRandomLottoNumbers()).toStrictEqual(arr));
  });

  test('getLottoRanking util 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningLottos = [
      new Map([
        ['당첨 번호', [1, 2, 3, 7, 8, 9]],
        ['보너스 번호', 7],
      ]),
      new Map([
        ['당첨 번호', [1, 2, 3, 4, 8, 9]],
        ['보너스 번호', 5],
      ]),
      new Map([
        ['당첨 번호', [1, 2, 3, 4, 5, 9]],
        ['보너스 번호', 7],
      ]),
      new Map([
        ['당첨 번호', [1, 2, 3, 4, 6, 7]],
        ['보너스 번호', 5],
      ]),
      new Map([
        ['당첨 번호', [1, 2, 3, 4, 5, 6]],
        ['보너스 번호', 7],
      ]),
      new Map([
        ['당첨 번호', [6, 7, 8, 9, 10, 11]],
        ['보너스 번호', 3],
      ]),
    ];
    const result = [
      RANKING.FIFTH,
      RANKING.FOURTH,
      RANKING.THIRD,
      RANKING.SECOND,
      RANKING.FIRST,
      RANKING.NOTHING,
    ];
    winningLottos.forEach((winningLotto, index) =>
      expect(getLottoRanking(lotto, winningLotto)).toBe(result[index])
    );
  });

  MissionUtils.Console.close();
});
