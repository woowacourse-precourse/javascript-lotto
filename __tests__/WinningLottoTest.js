const WinningLotto = require('../src/WinningLotto');

describe('당첨로또 클래스 테스트', () => {
  test('보너스번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 'a');
    }).toThrow('[ERROR]');
  });
  test('보너스번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 1.2);
    }).toThrow('[ERROR]');
  });

  test('보너스번호가 1~45가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 46);
    }).toThrow('[ERROR]');
  });
  test('보너스번호가 당첨번호 안에 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 2);
    }).toThrow('[ERROR]');
  });
});
