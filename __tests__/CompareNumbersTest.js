const CompareNumbers = require('../src/CompareNumbers');
const lottoArr = [
  [8, 21, 23, 41, 42, 43],
  [3, 5, 11, 16, 32, 38],
  [7, 11, 16, 35, 36, 44],
  [1, 8, 11, 31, 41, 42],
  [13, 14, 16, 38, 42, 45],
  [7, 11, 30, 40, 42, 43],
  [2, 13, 22, 32, 38, 45],
  [1, 3, 5, 14, 22, 45],
];

const winningArr = [1, 2, 3, 4, 5, 6];
const bonus = 7;

const compareNumbers = new CompareNumbers(lottoArr, winningArr, bonus);

describe('로또 결과 판단 클래스 테스트', () => {
  test('(hasSameNumber) 로또에 당첨번호 있으면 true 반환', () => {
    const lotto = lottoArr[7]; // [1, 3, 5, 14, 22, 45]
    const winningNum = winningArr[0]; // 1
    expect(compareNumbers.hasSameNumber(lotto, winningNum)).toBeTruthy();
  });

  test('(hasSameNumber) 로또에 당첨번호 없으면 false 반환', () => {
    const lotto = lottoArr[7]; // [1, 3, 5, 14, 22, 45]
    const winningNum = winningArr[5]; // 6
    expect(compareNumbers.hasSameNumber(lotto, winningNum)).toBeFalsy();
  });
});
