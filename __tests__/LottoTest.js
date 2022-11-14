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
});
