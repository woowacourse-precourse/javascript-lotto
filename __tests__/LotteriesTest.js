const Lotteries = require('../src/Lotteries');
const MissionUtils = require('@woowacourse/mission-utils');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('rankGroup 등수 카운팅 테스트', () => {
  test.each([
    [
      [
        [8, 21, 23, 41, 42, 43],
        [8, 21, 23, 41, 42, 44],
        [8, 21, 23, 41, 42, 45],
      ],
      [8, 21, 23, 41, 42, 43],
      {
        rankFifth: 0,
        rankFourth: 0,
        rankThird: 1,
        rankSecond: 1,
        rankFirst: 1,
      },
    ],
    [
      [
        [8, 21, 23, 39, 40, 45],
        [8, 21, 23, 41, 40, 45],
        [1, 2, 3, 41, 42, 45],
      ],
      [8, 21, 23, 41, 42, 43],
      {
        rankFifth: 1,
        rankFourth: 1,
        rankThird: 0,
        rankSecond: 0,
        rankFirst: 0,
      },
    ],
  ])(
    '수익률 소수점 둘째 자리 반올림 테스트',
    (randomLotto, winningLotto, result) => {
      mockRandoms(randomLotto);
      const lotteries = new Lotteries();
      lotteries.purchaseAuto();
      lotteries.purchaseAuto();
      lotteries.purchaseAuto();
      lotteries.setWinningLotto(winningLotto);
      lotteries.setBonusLotto(45);
      lotteries.getStorage().forEach(lotto => {
        const correctCount = lotto.countMatchDigit(winningLotto);
        lotteries.setRankGroup(correctCount, lotto);
      })
      expect(lotteries.getRankGroup()).toEqual(result);
    },
  );
});
