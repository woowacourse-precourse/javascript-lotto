const Result = require('../src/Result');

describe('결과 클래스 테스트', () => {
  test('로또 번호와 당첨 번호를 비교해서 겹치는 숫자로 이루어진 새 배열을 리턴한다.', () => {
    const randomNumsUnits = [
      [3, 9, 22, 32, 35, 37],
      [4, 5, 10, 17, 28, 40],
      [1, 4, 23, 25, 40, 43],
      [1, 4, 12, 30, 40, 43],
      [1, 4, 23, 30, 40, 43],
    ];
    const lottoNums = [1, 4, 23, 30, 40, 43];
    const bonusNum = 12;
    const correctResult = [
      [],
      [4, 40],
      [1, 4, 23, 40, 43],
      [1, 4, 30, 40, 43, 12],
      [1, 4, 23, 30, 40, 43],
    ];
    const result = new Result(randomNumsUnits, lottoNums, bonusNum);
    expect(result.makeCorrectNums()).toEqual(correctResult);
  });

  test('당첨 내역 리스트를 리턴한다.', () => {
    const randomNumsUnits = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const lottoNums = [1, 2, 3, 4, 5, 6];
    const bonusNum = 7;
    const correctResult = {
      three: 1,
      four: 0,
      five: 0,
      fiveAndBonus: 0,
      six: 0,
    };
    const result = new Result(randomNumsUnits, lottoNums, bonusNum);
    result.getResult();
    expect(result.hitNumList).toEqual(correctResult);
  });
});
