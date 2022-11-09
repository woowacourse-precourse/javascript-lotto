const Purchase = require('../src/controller/Purchase');

/* eslint-disable max-lines-per-function */
const removeDuplicatedNumbers = (numbers) => new Set(numbers);

describe('구입 클래스 테스트', () => {
  const { getLottoNumbers } = new Purchase();

  test('6개의 번호가 있다. ', () => {
    const numbers = getLottoNumbers();

    expect(numbers).toHaveLength(6);
  });

  test('중복된 수가 존재하지 않는다.', () => {
    const numbers = getLottoNumbers();
    const result = removeDuplicatedNumbers(numbers);

    expect(result.size).toEqual(numbers.length);
  });

  test('1~45범위의 수 이어야 한다.', () => {
    const numbers = getLottoNumbers();

    numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
      expect(typeof number).toEqual('number');
    });
  });
});
