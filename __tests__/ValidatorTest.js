const { ERROR_MSG } = require('../src/Constant');
const {
  validateMoney,
  validateInput,
  validateNumbers,
  validateNumber,
} = require('../src/Validator');

const {
  notNumber,
  only1000WonUnits,
  prefix,
  duplicateNumbers,
  only6Numbers,
  outOfRange,
} = ERROR_MSG;

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

  test('입력 당첨 번호가 6개가 아니면 예외가 발생한다.', () => {
    const invalidNumbers1 = [1, 2, 3, 4, 5];
    const invalidNumbers2 = [1, 2, 3, 4, 5, 6, 7];
    const validNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      validateNumbers(invalidNumbers1);
    }).toThrow(prefix + only6Numbers);
    expect(() => {
      validateNumbers(invalidNumbers2);
    }).toThrow(prefix + only6Numbers);
    expect(() => {
      validateNumbers(validNumbers);
    }).not.toThrow();
  });

  test('입력 당첨 번호가 중복되면 예외가 발생한다.', () => {
    const invalidNumbers = [1, 2, 3, 4, 4, 6];
    const validNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      validateNumbers(invalidNumbers);
    }).toThrow(prefix + duplicateNumbers);
    expect(() => {
      validateNumbers(validNumbers);
    }).not.toThrow();
  });

  test('입력 당첨 번호가 1 이상 45 이하가 아니면 예외가 발생한다.', () => {
    const invalidNumbers1 = [1, 2, 0, 3, 4, 5];
    const invalidNumbers2 = [1, 2, 3, 4, 5, 46];
    const validNumbers = [1, 2, 3, 45, 44, 41];
    expect(() => {
      validateNumbers(invalidNumbers1);
    }).toThrow(prefix + outOfRange);
    expect(() => {
      validateNumbers(invalidNumbers2);
    }).toThrow(prefix + outOfRange);
    expect(() => {
      validateNumbers(validNumbers);
    }).not.toThrow();
  });

  test('입력 보너스 번호가 1 이상 45 이하가 아니면 예외가 발생한다.', () => {
    const invalidNumber1 = 0;
    const invalidNumber2 = 46;
    const validNumber1 = 1;
    const validNumber2 = 45;
    expect(() => {
      validateNumber(invalidNumber1);
    }).toThrow(prefix + outOfRange);
    expect(() => {
      validateNumber(invalidNumber2);
    }).toThrow(prefix + outOfRange);
    expect(() => {
      validateNumber(validNumber1);
    }).not.toThrow();
    expect(() => {
      validateNumber(validNumber2);
    }).not.toThrow();
  });
});
