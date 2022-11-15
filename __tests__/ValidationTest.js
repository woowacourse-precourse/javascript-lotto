const { validateNumber, isNumberSorted, isNumbersUnique } = require('../src/utils/validation');

describe('validation.js 테스트', () => {
  test('보너스 번호 유효 검증 : 0', () => {
    expect(() => {
      const input = 0;
      validateNumber(input);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호 유효 검증 : 46', () => {
    expect(() => {
      const input = 46;
      validateNumber(input);
    }).toThrow('[ERROR]');
  });

  test('로또 배열 정렬 검증 : 틀렸을 때', () => {
    const input = [1, 2, 3, 7, 6, 5];
    const result = isNumberSorted(input);
    expect(result).toBeFalsy();
  });

  test('로또 배열 정렬 검증 : 틀렸을 때', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const result = isNumberSorted(input);
    expect(result).toBeTruthy();
  });

  test('로또 배열에 중복된 글자가 포함되어 있는지 검사', () => {
    const input = [1, 2, 3, 4, 5, 5];
    const result = isNumbersUnique(input);
    expect(result).toBeFalsy();
  });
});
