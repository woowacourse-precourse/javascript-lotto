const Lotto = require('../src/models/Lotto');

describe('Lotto 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow();
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow();
  });

  test('로또 번호에 false값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, false, 5]);
    }).toThrow();
  });

  test('로또 번호에 문자열이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '6']);
    }).toThrow();
  });

  test('로또 번호가 1 ~ 45의 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 46]);
    }).toThrow();
  });
});
