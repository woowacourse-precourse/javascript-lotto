const Lotto = require('../src/Model/Lotto');

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

  test('로또 번호에 숫자가 아닌 문자가 오면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['가', 2, 3, 4, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 범위 테스트', () => {
    expect(() => {
      new Lotto([65, 75, 85, 95, 1000, 12]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 범위 테스트', () => {
    expect(() => {
      new Lotto([0, 1, -5, 95, 1000, 12]);
    }).toThrow('[ERROR]');
  });
});
