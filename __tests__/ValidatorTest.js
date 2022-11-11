const Validator = require("../src/Utils/Validator");
const MESSAGES = require("../src/constants");

describe("amountValidCheck 테스트", () => {
  test("공백유무 판별", () => {
    const nonBlankInput = ['1341', '23134', 'dsads ass'];
    const blank = '';
    nonBlankInput.forEach(subject => {      
      const result = Validator.amountValidCheck(subject);
      expect(result).toBeFalsy();
    });
    expect(() => Validator.amountValidCheck(blank)).toThrowError();
  });
});
