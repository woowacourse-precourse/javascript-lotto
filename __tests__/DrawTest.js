const { Draw, ERROR_MESSAGE } = require('../src/Draw');

describe('당첨 번호 입력 검증', () => {
  test('6개의 숫자가 아닌 경우', () => {
    const draw = new Draw();
    expect(() => draw.checkWinningNumber([1, 2, 3, 4, 5])).toThrow(
      ERROR_MESSAGE.NOT_6_NUMBERS,
    );
  });

  test('숫자가 아닌 경우', () => {
    const draw = new Draw();
    expect(() => draw.checkWinningNumber([1, 2, 3, 4, 5, NaN])).toThrow(
      ERROR_MESSAGE.NOT_A_NUMBER,
    );
  });

  test('1 이상 45 이하의 숫자가 아닌 경우', () => {
    const draw = new Draw();
    expect(() => draw.checkWinningNumber([1, 2, 3, 4, 5, 46])).toThrow(
      ERROR_MESSAGE.OUT_OF_RANGE,
    );
  });

  test('중복된 숫자가 있는 경우', () => {
    const draw = new Draw();
    expect(() => draw.checkWinningNumber([1, 2, 3, 4, 5, 5])).toThrow(
      ERROR_MESSAGE.DUPLICATED,
    );
  });
});
