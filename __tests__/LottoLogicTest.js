/* eslint-disable */

const {
  checkWinningNumbersLength,
  checkWinningNumbersDuplication,
  checkWinningNumbersRange,
} = require('../src/lib/utils/LottoUtils');

describe('로또 당첨 번호 로직 단위 테스트', () => {
  test('로또 당첨 번호의 길이 테스트', () => {
    expect(checkWinningNumbersLength([1, 2, 3, 4, 5, 6])).toEqual(false);
    expect(checkWinningNumbersLength([7, 12, 3, 5, 6, 9])).toEqual(false);
    expect(checkWinningNumbersLength([1, 2, 3, 4, 5, 6, 7])).toEqual(true);
    expect(checkWinningNumbersLength([1])).toEqual(true);
    expect(checkWinningNumbersLength([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(
      true
    );
  });

  test('로또 당첨 번호 중복 테스트', () => {
    expect(checkWinningNumbersDuplication([1, 2, 3, 4, 5, 6])).toEqual(false);
    expect(checkWinningNumbersDuplication([7, 12, 3, 5, 6, 9])).toEqual(false);
    expect(checkWinningNumbersDuplication([1, 2, 3, 4, 5, 1])).toEqual(true);
    expect(checkWinningNumbersDuplication([1, 2, 3, 4, 5, 5])).toEqual(true);
    expect(checkWinningNumbersDuplication([2, 2, 2, 2, 2, 2])).toEqual(true);
  });

  test('로또 당첨 번호 범위 테스트', () => {
    expect(checkWinningNumbersRange([1, 2, 3, 4, 5, 6])).toEqual(true);
    expect(checkWinningNumbersRange([7, 12, 3, 5, 6, 9])).toEqual(true);
    expect(checkWinningNumbersRange([1, 2, 0, 4, 5, 1])).toEqual(false);
    expect(checkWinningNumbersRange([1, 2, 46, 4, 5, 5])).toEqual(false);
    expect(checkWinningNumbersRange([2, 2, 100, 2, 2, 2])).toEqual(false);
  });
});
