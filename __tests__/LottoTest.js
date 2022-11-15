const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  const ERROR_MESSAGE = '[ERROR]';

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE);
  });

  // 아래에 추가 테스트 작성 가능
  test('로또 번호에 문자, 특수문자가 포함되어있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, '!', 5, 5]);
    }).toThrow(ERROR_MESSAGE);
  });

  test('로또 번호에 공백이 포함되어있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, , 5, 5]);
    }).toThrow(ERROR_MESSAGE);
  });

  test('로또 번호가 1보다 작으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, -12, 5, 6]);
    }).toThrow(ERROR_MESSAGE);
  });

  test('로또 번호가 45보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 123, 5, 5]);
    }).toThrow(ERROR_MESSAGE);
  });
});
