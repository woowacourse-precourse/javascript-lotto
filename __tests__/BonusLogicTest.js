/* eslint-disable */

const {
  checkWinningIncludeBonus,
  checkBonusRange,
} = require('../src/lib/utils/bonusUtils');

describe('보너스 번호 로직 단위 테스트', () => {
  test('보너스 번호가 당첨 번호에 포함되어 있는지 테스트', () => {
    expect(checkWinningIncludeBonus([1, 2, 3, 4, 5, 6], 11)).toEqual(false);
    expect(checkWinningIncludeBonus([1, 2, 3, 4, 5, 6], 45)).toEqual(false);
    expect(checkWinningIncludeBonus([1, 2, 3, 4, 5, 6], 3)).toEqual(true);
    expect(checkWinningIncludeBonus([1, 2, 3, 4, 5, 6], 2)).toEqual(true);
    expect(checkWinningIncludeBonus([1, 2, 3, 4, 5, 6], 5)).toEqual(true);
  });

  test('보너스 번호 범위 테스트', () => {
    expect(checkBonusRange(7)).toEqual(false);
    expect(checkBonusRange(8)).toEqual(false);
    expect(checkBonusRange(0)).toEqual(true);
    expect(checkBonusRange(46)).toEqual(true);
    expect(checkBonusRange(1000)).toEqual(true);
  });
});
