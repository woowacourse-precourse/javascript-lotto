const { ERROR_MSG } = require('../src/Constant');
const { validate } = require('../src/IO');

describe('입출력 클래스 테스트', () => {
  const validInput1 = '123000';
  const validInput2 = '1,2,3,4,5,6';
  const invalidInput1 = 'a11245t5';
  const invalidInput2 = '11|5';
  const invalidInput3 = ',1,2,3';
  const invalidInput4 = '1,2,3,';
  const invalidInput5 = '1,,2,3';
  const invalidInput6 = '1,2,3,4   ,5,6';
  test('공통 예외 상황 테스트', () => {
    expect(() => validate(validInput1)).not.toThrow(ERROR_MSG.notNumber);
    expect(() => validate(validInput2)).not.toThrow(ERROR_MSG.notNumber);
    expect(() => validate(invalidInput1)).toThrow(ERROR_MSG.notNumber);
    expect(() => validate(invalidInput2)).toThrow(ERROR_MSG.notNumber);
    expect(() => validate(invalidInput3)).toThrow(ERROR_MSG.notNumber);
    expect(() => validate(invalidInput4)).toThrow(ERROR_MSG.notNumber);
    expect(() => validate(invalidInput5)).toThrow(ERROR_MSG.notNumber);
    expect(() => validate(invalidInput6)).toThrow(ERROR_MSG.notNumber);
  });
});
