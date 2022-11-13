const BonusLotto = require('../src/BonusLotto');

describe('로또 클래스 테스트', () => {
  test('보너스 번호와 일치하는 당첨 번호가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new BonusLotto([['1', '23', '3', '4', '5', '6'], '6']);
    }).toThrow('[ERROR]');
  });

  test('처리할 수 없는 번호가 들어왔을 때 예외가 발생한다.', () => {
    expect(() => {
      new BonusLotto([['1', '23', '3', '4', '5', '6'], '6, 45']);
    }).toThrow('[ERROR]');
  });

  test('처리할 수 없는 번호가 들어왔을 때 예외가 발생한다.(문자열)', () => {
    expect(() => {
      new BonusLotto([['1', '23', '3', '4', '5', '6'], 'absdd']);
    }).toThrow('[ERROR]');
  });

  test('0으로 시작하는 번호가 들어왔을 때 예외가 발생한다.', () => {
    expect(() => {
      new BonusLotto([['1', '23', '3', '4', '5', '6'], '023']);
    }).toThrow('[ERROR]');
  });
});
