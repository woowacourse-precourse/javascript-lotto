const Validator = require("../src/Utils/Validator");
const MESSAGES = require("../src/constants");

describe("amountValidCheck 테스트", () => {
  test("공백유무 판별", () => {
    const nonBlankInput = ['1341', '23134', 'dsads ass'];
    const blank = '';
    nonBlankInput.forEach(subject => {      
      const result = Validator.isBlank(subject);
      expect(result).toBeUndefined();
    });
    expect(() => Validator.isBlank(blank)).toThrowError(MESSAGES.ERROR.isBlank);
  });
  test("숫자여부 판별", () => {
    const numbers = ['1341', '23134', '1243124141', '1'];
    const strings = ['@#!$!', 'asasda', '한글', 'dda>?', '123'];
    numbers.forEach(subject => {      
      const result = Validator.isNotNumber(subject);
      expect(result).toBeUndefined();
    });
    const string = 'oneTwo';
    const specials = '@!#!@$>';
    const mixed = '123abc';
    expect(() => Validator.isNotNumber(string)).toThrowError(MESSAGES.ERROR.isNotNumber);
    expect(() => Validator.isNotNumber(specials)).toThrowError(MESSAGES.ERROR.isNotNumber);
    expect(() => Validator.isNotNumber(mixed)).toThrowError(MESSAGES.ERROR.isNotNumber);
  });
});
