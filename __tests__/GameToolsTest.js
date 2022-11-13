const {
  stringToSortedNumberArray,
  calcTotalPrize,
} = require('../src/GameTools');
const GameTools = require('../src/GameTools');

describe('로또 발행 테스트', () => {});

test('입력받은 당첨 번호를 ,로 구분된 숫자 배열로 반환', () => {
  const winningString = ['2,3,4,5,6,1', '31,1,24,45,3,4'];
  const answers = [
    [1, 2, 3, 4, 5, 6],
    [1, 3, 4, 24, 31, 45],
  ];

  winningString.forEach((string, i) => {
    expect(stringToSortedNumberArray(string)).toEqual(answers[i]);
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

test('총 상금을 계산해 반환', () => {
  const winningState = [
    [0, 0, 0, 0, 1],
    [0, 0, 0, 4, 6],
    [0, 0, 3, 0, 3],
    [0, 2, 9, 0, 2],
    [2, 1, 5, 3, 2],
  ];
  const answers = [5000, 230000, 4515000, 73510000, 4037660000];

  winningState.forEach((state, i) => {
    expect(calcTotalPrize(state)).toBe(answers[i]);
  });
});

test('수익율을 계산해 소수점 둘 째 자리에서 반올림한 값을 반환', () => {
  const totalPrize = [150000, 5000, 30000, 30000000, 4000000000];
  const countOfLottos = [3, 4, 5, 10, 20];
  const answers = ['5000.0', '125.0', '600.0', '300000.0', '20000000.0'];

  totalPrize.forEach((money, i) => {
    expect(GameTools.calcRateOfReturn(money, countOfLottos[i])).toBe(
      answers[i]
    );
  });
});
