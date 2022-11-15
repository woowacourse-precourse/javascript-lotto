const { ERROR_MSG } = require('../src/Constant');
const { validateMoney, validateInput } = require('../src/Validator');

const { notNumber, only1000WonUnits, prefix } = ERROR_MSG;

describe('유효성 검사기 테스트', () => {
  test('입력 공통 예외 상황 테스트', () => {
    const validInput1 = '123000';
    const validInput2 = '1,2,3,4,5,6';
    const invalidInput1 = 'a11245t5';
    const invalidInput2 = '11|5';
    const invalidInput3 = ',1,2,3';
    const invalidInput4 = '1,2,3,';
    const invalidInput5 = '1,,2,3';
    const invalidInput6 = '1,2,3,4   ,5,6';
    expect(() => validateInput(validInput1)).not.toThrow();
    expect(() => validateInput(validInput2)).not.toThrow();
    expect(() => validateInput(invalidInput1)).toThrow(notNumber);
    expect(() => validateInput(invalidInput2)).toThrow(notNumber);
    expect(() => validateInput(invalidInput3)).toThrow(notNumber);
    expect(() => validateInput(invalidInput4)).toThrow(notNumber);
    expect(() => validateInput(invalidInput5)).toThrow(notNumber);
    expect(() => validateInput(invalidInput6)).toThrow(notNumber);
  });

  test('입력 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    const validMoney = 5000;
    const invalidMoney = 5555;
    expect(() => {
      validateMoney(invalidMoney);
    }).toThrow(prefix + only1000WonUnits);
    expect(() => {
      validateMoney(validMoney);
    }).not.toThrow();
  });
});
