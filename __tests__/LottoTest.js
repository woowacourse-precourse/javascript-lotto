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

  test('로또 번호의 개수가 6개가 안되면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 범위밖에 있는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 50, 100, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 'a', 'b', 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('아무 값도 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto('');
    }).toThrow('[ERROR]');
  });
});
