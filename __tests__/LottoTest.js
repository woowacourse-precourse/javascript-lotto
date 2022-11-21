const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, NaN]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1 이상 45 이하가 아닌 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });
});

describe('로또 번호에 따른 등수 반환', () => {
  test('1등', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toBe(1);
  });

  test('2등', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toBe(2);
  });

  test('3등', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 8]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toBe(3);
  });

  test('4등', () => {
    const lotto = new Lotto([1, 2, 3, 4, 8, 9]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toBe(4);
  });

  test('5등', () => {
    const lotto = new Lotto([1, 2, 3, 8, 9, 10]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toBe(5);
  });
});
