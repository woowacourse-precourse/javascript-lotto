const { compare } = require('../src/Referee');

describe('심판 클래스 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const lotto1st = [1, 2, 3, 4, 5, 6];
  const lotto2nd = [1, 2, 3, 4, 5, 7];
  const lotto3rd = [1, 2, 3, 4, 5, 8];
  const lotto4th = [1, 2, 3, 4, 8, 9];
  const lotto5th = [1, 2, 3, 8, 9, 10];
  const lottoNot1 = [1, 2, 7, 8, 9, 10];
  const lottoNot2 = [1, 7, 8, 9, 10, 11];
  test('일치 개수와 보너스 여부에 따라 등수를 반환한다.', () => {
    expect(compare(lotto1st, winningNumbers, bonusNumber)).toEqual(1);
    expect(compare(lotto2nd, winningNumbers, bonusNumber)).toEqual(2);
    expect(compare(lotto3rd, winningNumbers, bonusNumber)).toEqual(3);
    expect(compare(lotto4th, winningNumbers, bonusNumber)).toEqual(4);
    expect(compare(lotto5th, winningNumbers, bonusNumber)).toEqual(5);
    expect(compare(lottoNot1, winningNumbers, bonusNumber)).toEqual(-1);
    expect(compare(lottoNot2, winningNumbers, bonusNumber)).toEqual(-1);
  });
});
