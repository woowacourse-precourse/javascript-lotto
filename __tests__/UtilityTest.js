const {
  splitComma,
  matchArrayNumbers,
  createRandomLotto,
  sortAscent,
  percentage,
  convertLocale,
} = require('../src/libs/Utils');

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

describe('랜덤 배열을 반환하는 함수 테스트 ', () => {
  test('기능 테스트', () => {
    const randomArray = createRandomLotto();
    expect(randomArray).toHaveLength(6);
    for (let i = 0; i < 5; i += 1) {
      expect(randomArray[i]).toBeGreaterThanOrEqual(1);
      expect(randomArray[i]).toBeLessThanOrEqual(45);
    }
  });

  describe('오름차순으로 정렬하는 함수 테스트', () => {
    test('기능 테스트', () => {
      const array = [15, 27, 45, 1, 5, 3];
      const result = [1, 3, 5, 15, 27, 45];
      expect(sortAscent(array)).toEqual(result);
    });
  });

  describe('수익률을 계산하는 함수 테스트', () => {
    test('퍼센트 함수 테스트', () => {
      expect(percentage(10, 20)).toBe('50.0');
      expect(percentage(1, 3)).toBe('33.3');
    });

    test('3자리마다 쉼표(,)를 입력하는 함수 테스트', () => {
      expect(convertLocale('100000.0')).toBe('100,000.0');
      expect(convertLocale('1234567890.0')).toBe('1,234,567,890.0');
    });
  });
});
