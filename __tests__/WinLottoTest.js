const WinLotto = require('../src/WinLotto');

describe('당첨 로또 클래스 테스트', () => {
  test('보너스번호가 문자열을 포함하면 예외가 발생한다.', () => {
    expect(() => {
      new WinLotto([1, 2, 3, 4, 5, 6], '1a');
    }).toThrow('[ERROR]');
  });

  test('보너스번호가 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new WinLotto([1, 2, 3, 4, 5, 6], 46);
    }).toThrow('[ERROR]');
  });

  test('당첨번호와 보너스번호가 중복되면 예외가 발생한다.', () => {
    expect(() => {
      new WinLotto([1, 2, 3, 4, 5, 6], 6);
    }).toThrow('[ERROR]');
  });
});
