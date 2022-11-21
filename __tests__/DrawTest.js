const { Draw, ERROR_MESSAGE } = require('../src/Draw');

describe('당첨 번호 입력 검증', () => {
  test('6개의 숫자가 아닌 경우', () => {
    const draw = new Draw();
    expect(() => draw.checkWinningNumbers([1, 2, 3, 4, 5])).toThrow(
      ERROR_MESSAGE.NOT_6_NUMBERS,
    );
  });

  test('숫자가 아닌 경우', () => {
    const draw = new Draw();
    expect(() => draw.checkWinningNumbers([1, 2, 3, 4, 5, NaN])).toThrow(
      ERROR_MESSAGE.NOT_A_NUMBER,
    );
  });

  test('1 이상 45 이하의 숫자가 아닌 경우', () => {
    const draw = new Draw();
    expect(() => draw.checkWinningNumbers([1, 2, 3, 4, 5, 46])).toThrow(
      ERROR_MESSAGE.OUT_OF_RANGE,
    );
  });

  test('중복된 숫자가 있는 경우', () => {
    const draw = new Draw();
    expect(() => draw.checkWinningNumbers([1, 2, 3, 4, 5, 5])).toThrow(
      ERROR_MESSAGE.DUPLICATED,
    );
  });
});

describe('보너스 번호 입력 검증', () => {
  test('숫자가 아닌 경우', () => {
    const draw = new Draw();
    expect(() => draw.checkBonusNumber(NaN)).toThrow(
      ERROR_MESSAGE.NOT_A_NUMBER,
    );
  });

  test('1 이상 45 이하의 숫자가 아닌 경우', () => {
    const draw = new Draw();
    expect(() => draw.checkBonusNumber(46)).toThrow(ERROR_MESSAGE.OUT_OF_RANGE);
  });

  test('당첨 번호와 중복된 경우', () => {
    const draw = new Draw();
    draw.winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => draw.checkBonusNumber(1)).toThrow(ERROR_MESSAGE.DUPLICATED);
  });
});
