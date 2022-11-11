const Validator = require("../src/Utils/Validator");
const { MESSAGES } = require("../src/constants");

describe("amountValidCheck 테스트", () => {
  test("공백 여부 판별", () => {
    const nonBlankInput = ['1341', '23134', 'dsads ass'];
    const blank = '';
    nonBlankInput.forEach(subject => {      
      const result = Validator.isBlank(subject);
      expect(result).toBeUndefined();
    });
    expect(() => Validator.isBlank(blank)).toThrowError(MESSAGES.ERROR.isBlank);
  });
  test("공백 유무 판별", () => {
    const normalNumbers = ['1341', '23134', '1243124141', '1'];
    const haveBlankNumbers = ['1  21 3', '   123', '123   '];
    normalNumbers.forEach(subject => {      
      const result = Validator.hasBlank(subject);
      expect(result).toBeUndefined();
    });
    haveBlankNumbers.forEach(subject => {      
      expect(() => Validator.hasBlank(subject)).toThrowError(MESSAGES.ERROR.hasBlank);
    });
  });
  test("숫자 여부 판별", () => {
    const numbers = [1341, 23134, 1243124141, 1];
    const notNumbers = ['oneTwo', '@!#!@$>', '123abc'];
    numbers.forEach(subject => {      
      const result = Validator.isNotNumber(subject);
      expect(result).toBeUndefined();
    });
    notNumbers.forEach(subject => {    
      expect(() => Validator.isNotNumber(subject)).toThrowError(MESSAGES.ERROR.isNotNumber);
    });
  });
  test("천원 단위 판별", () => {
    const kilos = [1000, 10000, 231000];
    const notKilos = [1001, 500, 1230, 999, 111001];
    kilos.forEach(subject => {      
      const result = Validator.isNotKilo(subject);
      expect(result).toBeUndefined();
    });
    notKilos.forEach(subject => {      
      expect(() => Validator.isNotKilo(subject)).toThrowError(MESSAGES.ERROR.isNotKilo);
    });
  });
});