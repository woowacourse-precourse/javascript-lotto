/* eslint-disable max-lines-per-function */
const lottoGenerator = require('../src/utils/lottoGenerator');

const removeDuplicatedNumbers = (numbers) => new Set(numbers);

describe('로또 번호 생성 테스트', () => {
  test('1세트의 로또에 6개의 번호가 있다. ', () => {
    const result = lottoGenerator.getNumbers();

    expect(result).toHaveLength(6);
  });

  test('1세트의 로또에 중복된 수가 존재하지 않는다.', () => {
    const result = lottoGenerator.getNumbers();

    expect(result.length).toEqual(removeDuplicatedNumbers(result).size);
  });

  test('1세트의 로또에 1~45 범위의 수 이어야 한다.', () => {
    const result = lottoGenerator.getNumbers();

    result.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });
  });

  test('로또 세트는 횟수만큼 발행되어야 한다.', () => {
    const result = lottoGenerator.getTimes(3);

    expect(result).toHaveLength(3);
  });
});
