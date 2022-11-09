const Lotto = require('./Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow(
      new Error('[ERROR] 로또 번호는 6개여야 합니다.')
    );
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow(
      new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.')
    );
  });

  test('로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => new Lotto([0, 2, 3, 4, 5, 6])).toThrow(
      new Error('[ERROR] 로또 번호는 1부터 45까지의 수만 가능합니다.')
    );
  });

  test('로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 46])).toThrow(
      new Error('[ERROR] 로또 번호는 1부터 45까지의 수만 가능합니다.')
    );
  });

  test('');
});
