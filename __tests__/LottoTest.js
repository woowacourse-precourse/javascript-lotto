const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 'a', 6]);
    }).toThrow('[ERROR]');
  });

  test('결과 반환 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const first = [1, 2, 3, 4, 5, 6];
    const second = [1, 2, 3, 4, 5, 9];
    const third = [1, 2, 3, 4, 5, 9];
    const fourth = [1, 2, 3, 4, 8, 9];
    const fifth = [1, 2, 3, 7, 8, 9];

    const result1 = lotto.calculateResult(first);
    const result2 = lotto.calculateResult(second, 6);
    const result3 = lotto.calculateResult(third);
    const result4 = lotto.calculateResult(fourth);
    const result5 = lotto.calculateResult(fifth);

    expect(result1).toBe('first');
    expect(result2).toBe('second');
    expect(result3).toBe('third');
    expect(result4).toBe('fourth');
    expect(result5).toBe('fifth');
  });
});
