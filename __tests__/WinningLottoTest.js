const Lotto = require('../src/Lotto');
const WinningLotto = require('../src/WinningLotto');

describe('당첨로또 클래스 테스트', () => {
  test('보너스번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
      winningLotto.setBonus('a');
    }).toThrow('[ERROR]');
  });
  test('보너스번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
      winningLotto.setBonus(1.2);
    }).toThrow('[ERROR]');
  });

  test('보너스번호가 1~45가 아니면 예외가 발생한다.', () => {
    expect(() => {
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
      winningLotto.setBonus(46);
    }).toThrow('[ERROR]');
  });
  test('보너스번호가 당첨번호 안에 있으면 예외가 발생한다.', () => {
    expect(() => {
      const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
      winningLotto.setBonus(2);
    }).toThrow('[ERROR]');
  });
  test('로또 번호 일치 개수 테스트1', () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
    winningLotto.setBonus(7);
    const myLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(winningLotto.getNumOfMatchedAndBonus(myLotto)).toEqual([6, 0]);
  });
  test('로또 번호 일치 개수 테스트2', () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
    winningLotto.setBonus(7);
    const myLotto = new Lotto([7, 8, 9, 10, 11, 12]);
    expect(winningLotto.getNumOfMatchedAndBonus(myLotto)).toEqual([0, 1]);
  });
  test('로또 번호 일치 개수 테스트3', () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
    winningLotto.setBonus(7);
    const myLotto = new Lotto([1, 2, 3, 5, 6, 7]);
    expect(winningLotto.getNumOfMatchedAndBonus(myLotto)).toEqual([5, 1]);
  });
});
