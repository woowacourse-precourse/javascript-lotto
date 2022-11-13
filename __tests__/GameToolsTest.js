const MissionUtils = require('@woowacourse/mission-utils');
const GameTools = require('../src/GameTools');

afterAll(() => MissionUtils.Console.close());

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange
  );
};

test('로또 발행 테스트', () => {
  const count = 3;
  const randoms = [
    [6, 2, 3, 4, 5, 1],
    [11, 31, 35, 40, 22, 13],
    [41, 3, 5, 1, 17, 9],
  ];

  mockRandoms(randoms);

  expect(GameTools.issueLottoAsManyAsCount(count)).toEqual([
    [1, 2, 3, 4, 5, 6],
    [11, 13, 22, 31, 35, 40],
    [1, 3, 5, 9, 17, 41],
  ]);
});

test('입력받은 당첨 번호를 ,로 구분된 숫자 배열로 반환', () => {
  const winningStrings = ['2,3,4,5,6,1', '31,1,24,45,3,4'];
  const answers = [
    [1, 2, 3, 4, 5, 6],
    [1, 3, 4, 24, 31, 45],
  ];

  winningStrings.forEach((string, i) => {
    expect(GameTools.stringToSortedNumberArray(string)).toEqual(answers[i]);
  });
});

test('두 배열이 모두 가진 숫자 요소의 개수를 반환', () => {
  const lottoNumbers = [
    [1, 2, 3, 4, 5, 6],
    [1, 5, 8, 31, 24, 45],
    [5, 6, 7, 8, 9, 10],
  ];
  const winningNumbers = [
    [3, 4, 5, 6, 1, 2],
    [8, 1, 44, 31, 9, 10],
    [11, 12, 13, 14, 15, 16],
  ];
  const answers = [6, 3, 0];

  lottoNumbers.forEach((lotto, i) => {
    expect(GameTools.getMatchingNumCount(lotto, winningNumbers[i])).toBe(
      answers[i]
    );
  });
});

test('하나의 로또에 대한 당첨 등수를 반환', () => {
  const matchingCounts = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6];
  const matchesBonusNums = [
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
    false,
    true,
  ];
  const answers = [-1, -1, 4, 4, 3, 3, 2, 1, 0, 0];

  matchingCounts.forEach((count, i) => {
    expect(GameTools.getWinningRanking(count, matchesBonusNums[i])).toBe(
      answers[i]
    );
  });
});

test('총 상금을 계산해 반환', () => {
  const winningStates = [
    [0, 0, 0, 0, 1],
    [0, 0, 0, 4, 6],
    [0, 0, 3, 0, 3],
    [0, 2, 9, 0, 2],
    [2, 1, 5, 3, 2],
  ];
  const answers = [5000, 230000, 4515000, 73510000, 4037660000];

  winningStates.forEach((state, i) => {
    expect(GameTools.calcTotalPrize(state)).toBe(answers[i]);
  });
});

test('수익율을 계산해 소수점 둘 째 자리에서 반올림한 값을 반환', () => {
  const totalPrizes = [150000, 5000, 30000, 30000000, 4000000000];
  const countOfLottos = [3, 4, 5, 10, 20];
  const answers = ['5000.0', '125.0', '600.0', '300000.0', '20000000.0'];

  totalPrizes.forEach((money, i) => {
    expect(GameTools.calcRateOfReturn(money, countOfLottos[i])).toBe(
      answers[i]
    );
  });
});
