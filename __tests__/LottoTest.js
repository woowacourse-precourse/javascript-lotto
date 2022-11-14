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

  test('45보다 큰 숫자가 로또 번호에 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('1보다 작은 숫자가 로또 번호에 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 문자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 정상적으로 생성되면 예외가 발생하지 않는다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
      new Lotto([45, 44, 43, 42, 41, 40]);
    }).not.toThrow('[ERROR]');
  });

  test('toString 메소드가 정상적으로 동작한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.toString()).toBe('[1, 2, 3, 4, 5, 6]');
  });

  test('getRank 메소드가 정상적으로 동작한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.getRank(6, false)).toBe(1);
    expect(lotto.getRank(5, true)).toBe(2);
    expect(lotto.getRank(5, false)).toBe(3);
    expect(lotto.getRank(4, false)).toBe(4);
    expect(lotto.getRank(3, false)).toBe(5);
    expect(lotto.getRank(2, false)).toBe(0);
    expect(lotto.getRank(1, false)).toBe(0);
    expect(lotto.getRank(0, false)).toBe(0);
  });

  test('checkWin 메소드가 정상적으로 동작한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.checkWin([1, 2, 3, 4, 5, 6], 7)).toBe(1);
    expect(lotto.checkWin([1, 2, 3, 4, 5, 7], 6)).toBe(2);
    expect(lotto.checkWin([1, 2, 3, 4, 5, 7], 16)).toBe(3);
  });
});
