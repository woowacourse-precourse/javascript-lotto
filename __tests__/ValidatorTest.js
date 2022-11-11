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

describe('bonusValidCheck 테스트', () => {
  test('보너스 중복 테스트', () => {    
    const input = 10;
    const DuplicatedInput = 3;
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [11, 22, 3, 44, 15, 6],
      [11, 3, 44, 44, 15, 6],
      [7, 4, 12, 41, 3, 6]
    ];
    lottos.forEach(lotto => {
      const result = Validator.isDuplicatedBonus(input ,lotto);
      expect(result).toBeUndefined();
    });    
    lottos.forEach(lotto => {   
      expect(() => Validator.isDuplicatedBonus(DuplicatedInput, lotto)).toThrowError(MESSAGES.ERROR.isDuplicatedBonus);
    });
  });
  
  test('보너스 개수 테스트', () => {    
    const input = [1];
    const diffrentLengthInput = [1, 2];
    expect(Validator.isDiffrentBonusLength(input)).toBeUndefined();
    expect(() => Validator.isDiffrentBonusLength(diffrentLengthInput)).toThrowError(MESSAGES.ERROR.isDiffrentBonusLength);
  });
});