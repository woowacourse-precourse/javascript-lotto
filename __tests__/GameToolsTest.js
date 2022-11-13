const GameTools = require('../src/GameTools');

describe('로또 발행 테스트', () => {});

describe('문자열을 ,로 구분된 숫자 배열로 반환', () => {});

test.only('두 배열이 모두 가진 숫자 요소의 개수를 반환', () => {
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
