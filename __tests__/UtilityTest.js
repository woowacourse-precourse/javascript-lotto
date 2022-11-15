const { splitComma, matchArrayNumbers } = require('../src/libs/Utils');

describe('쉼표(,) 기준으로 번호를 구분하는 함수 테스트 ', () => {
  test('기능 테스트', () => {
    expect(splitComma('1,2,3,4,5,6')).toEqual(['1', '2', '3', '4', '5', '6']);
    expect(splitComma('1 , 2, 3, 4, 5, 6')).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
    ]);
  });
});

describe('발행된 로또 번호와 당첨 번호를 비교하는 함수 테스트 ', () => {
  test('기능 테스트', () => {
    const array1 = [1, 2, 3, 4, 5, 6];
    const array2 = [4, 5, 6, 7, 8, 9];
    const array3 = [5, 6, 7, 8, 9, 10];
    expect(matchArrayNumbers(array1, array2)).toBe(3);
    expect(matchArrayNumbers(array2, array3)).toBe(5);
  });
});
