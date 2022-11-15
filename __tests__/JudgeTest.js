const { checkBonus, countCorrect } = require('../src/Judge');

describe('판단기 클래스 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const lotto1st = [1, 2, 3, 4, 5, 6];
  const lotto2nd = [1, 2, 3, 4, 5, 7];
  const lotto3rd = [1, 2, 3, 4, 5, 8];
  const lotto4th = [1, 2, 3, 4, 8, 9];
  const lotto5th = [1, 2, 3, 8, 9, 10];
  test('로또 번호와 당첨 번호가 몇개 일치하는지 센다.', () => {
    expect(countCorrect(lotto1st, winningNumbers)).toEqual(6);
    expect(countCorrect(lotto2nd, winningNumbers)).toEqual(5);
    expect(countCorrect(lotto3rd, winningNumbers)).toEqual(5);
    expect(countCorrect(lotto4th, winningNumbers)).toEqual(4);
    expect(countCorrect(lotto5th, winningNumbers)).toEqual(3);
  });

  test('보너스 번호가 일치하는지 확인한다.', () => {
    expect(checkBonus(lotto2nd, bonusNumber)).toBeTruthy();
    expect(checkBonus(lotto3rd, bonusNumber)).not.toBeTruthy();
  });
});
