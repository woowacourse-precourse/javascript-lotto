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

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 숫자가 아닌 것이 있으면 예외 발생', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '육']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 0이하, 45이상인 숫자가 있으면 예외 발생.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 45]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 공백이 있으면 예외 발생.', () => {
    expect(() => {
      new Lotto([ , ' ', 3, 4, 5, 6 ]);
    }).toThrow('[ERROR]');
  });
});
