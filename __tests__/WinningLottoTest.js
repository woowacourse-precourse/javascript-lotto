const Lotto = require('../src/Lotto');
const WinningLotto = require('../src/WinningLotto');

describe('당첨 로또 클래스 테스트', () => {
  test('보너스 숫자가 범위보다 작을 때 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto(new Lotto([1, 2, 3, 4, 5, 6]), 0);
    }).toThrow('[ERROR]');
  });

  test('보너스 숫자가 범위보다 클 때 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto(new Lotto([1, 2, 3, 4, 5, 6]), 60);
    }).toThrow('[ERROR]');
  });

  test('보너스 숫자가 숫자가 아닐 때 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto(new Lotto([1, 2, 3, 4, 5, 6]), NaN);
    }).toThrow('[ERROR]');
  });

  test('보너스 숫자가 정수가 아닐 때 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto(new Lotto([1, 2, 3, 4, 5, 6]), 1.5);
    }).toThrow('[ERROR]');
  });

  test('보너스 숫자가 당첨 숫자와 중복되면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto(new Lotto([1, 2, 3, 4, 5, 6]), 1);
    }).toThrow('[ERROR]');
  });
});
