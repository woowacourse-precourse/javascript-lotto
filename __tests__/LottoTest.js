const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 숫자가 아닌 값이 포함되면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, NaN, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 정수가 아닌 유리수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 3.014, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 음수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, -4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 46 이상의 수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 50, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1 미만의 수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 0, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('numberGetter 메서드를 사용해 lotto 인스턴스의 #numbers 필드 값을 확인할 수 있다', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const numberGetter = lotto.numbers;
    expect(numberGetter).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
