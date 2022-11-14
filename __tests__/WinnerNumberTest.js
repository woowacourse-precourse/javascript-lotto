const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE } = require('../src/constants');
const WinnerNumber = require('../src/domain/WinnerNumber');

describe('WinnerNumber 테스트', () => {
  afterEach(() => {
    Console.close();
  });

  test('당첨번호에 공백이 있을경우', () => {
    const result = new WinnerNumber('1, 2, 3, 4, 5, 6').getNumberWithoutSpace();
    expect(result).toEqual(['1', '2', '3', '4', '5', '6']);
  });

  test('범위초과 숫자인 46이 포함 되어 있을 경우 예외 발생', () => {
    expect(() => {
      new WinnerNumber('1,2,3,4,5,46');
    }).toThrow(ERROR_MESSAGE.winnerNumberRange);
  });

  test('범위초과 숫자인 0이 포함 되어 있을 경우 예외 발생', () => {
    expect(() => {
      new WinnerNumber('1,2,3,4,5,0');
    }).toThrow(ERROR_MESSAGE.winnerNumberRange);
  });

  test('범위초과 숫자인 음수가 포함 되어 있을 경우 예외 발생', () => {
    expect(() => {
      new WinnerNumber('1,2,3,4,5,-3');
    }).toThrow(ERROR_MESSAGE.winnerNumberRange);
  });

  test('문자가 포함되어 있을 경우 예외 발생', () => {
    expect(() => {
      new WinnerNumber('1,2,3,4,5,a');
    }).toThrow(ERROR_MESSAGE.winnerNumberRange);
  });

  test('쉼표(,)를 기준으로 6자리가 아닌경우 예외 발생', () => {
    expect(() => {
      new WinnerNumber('1,2,3,4,5,6,7');
    }).toThrow(ERROR_MESSAGE.winnerNumberCountOnlySix);
  });

  test('중복된 숫자가 입력된 경우 예외 발생', () => {
    expect(() => {
      new WinnerNumber('1,2,3,4,5,5');
    }).toThrow(ERROR_MESSAGE.numberWithoutDuplicate);
  });
});
