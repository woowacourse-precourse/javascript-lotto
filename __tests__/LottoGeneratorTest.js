const LottoGenerator = require('../src/core/LottoGenerator');

/* eslint-disable max-lines-per-function */
const removeDuplicatedNumbers = (numbers) => new Set(numbers);

describe('로또 생성 클래스 테스트', () => {
  const lottoGenerator = new LottoGenerator();

  test('6개의 번호가 있다. ', () => {
    const result = lottoGenerator.getNumbers();

    expect(result).toHaveLength(6);
  });

  test('중복된 수가 존재하지 않는다.', () => {
    const numbers = lottoGenerator.getNumbers();
    const result = removeDuplicatedNumbers(numbers);

    expect(result.size).toEqual(numbers.length);
  });

  test('1~45범위의 수 이어야 한다.', () => {
    const result = lottoGenerator.getNumbers();

    result.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
      expect(typeof number).toEqual('number');
    });
  });

  test('횟수만큼 로또 번호가 발행되어야 한다.', () => {
    expect(lottoGenerator.getTimes(3)).toHaveLength(3);
    expect(lottoGenerator.getTimes(6)).toHaveLength(6);
  });
});
