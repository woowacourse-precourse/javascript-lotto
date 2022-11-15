const Lotto = require('../src/Lotto.js');

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
  test('로또 번호에 숫자가 아닌 값이 들어오면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow('[ERROR]');
  });
  test('로또 번호가 1 ~ 45 사이의 숫자가 아니면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 90]);
    }).toThrow('[ERROR]');
  });
});
