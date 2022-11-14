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

  test('배열에 숫자가 아닌 입력이 들어오면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, NaN, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1~45 범위를 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아닌 경우 예외가 발생한다', () => {
    expect(() => {
      Lotto.isValidBonusNumber(NaN, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 보너스 번호와 같은 경우 예외가 발생한다', () => {
    expect(() => {
      Lotto.isValidBonusNumber(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
