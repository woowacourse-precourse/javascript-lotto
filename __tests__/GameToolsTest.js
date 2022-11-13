const { stringToSortedNumberArray } = require('../src/GameTools');
const GameTools = require('../src/GameTools');

describe('로또 발행 테스트', () => {});

test.only('입력받은 당첨 번호를 ,로 구분된 숫자 배열로 반환', () => {
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

test('총 상금을 계산해 반환', () => {});

describe('수익율을 계산해 반환', () => {});
