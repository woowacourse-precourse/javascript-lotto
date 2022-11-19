const Validator = require("../src/Utils/Validator");
const { MESSAGES } = require("../src/constants");

describe("amountValidCheck 테스트", () => {
  test("공백 여부 테스트", () => {
    const nonBlankInput = ['1000', '50000', '900000'];
    const blank = '';
    nonBlankInput.forEach(subject => {      
      const result = Validator.amountValidCheck(subject);
      expect(result).toBeUndefined();
    });
    expect(() => Validator.amountValidCheck(blank)).toThrowError();
  });

  test("공백 유무 테스트", () => {
    const normalNumbers = ['10000', '23000', '490000'];
    const haveBlankNumbers = ['100 00', '200 000 0', ' 1000'];
    normalNumbers.forEach(subject => {      
      const result = Validator.amountValidCheck(subject);
      expect(result).toBeUndefined();
    });
    haveBlankNumbers.forEach(subject => {      
      expect(() => Validator.amountValidCheck(subject)).toThrowError();
    });
  });

  test("숫자 판별 테스트", () => {
    const numbers = ['10000', '23000', '490000'];
    const notNumbers = ['oneTwo', '@!#!@$>', '123abc'];
    numbers.forEach(subject => {      
      const result = Validator.amountValidCheck(subject);
      expect(result).toBeUndefined();
    });
    notNumbers.forEach(subject => {    
      expect(() => Validator.amountValidCheck(subject)).toThrowError();
    });
  });

  test("천원 단위 테스트", () => {
    const kilos = ['10000', '23000', '490000'];
    const notKilos = [1001, 500, 1230, 999, 111001];
    kilos.forEach(subject => {      
      const result = Validator.amountValidCheck(subject);
      expect(result).toBeUndefined();
    });
    notKilos.forEach(subject => {      
      expect(() => Validator.amountValidCheck(subject)).toThrowError();
    });
  });
});

describe('bonusValidCheck 테스트', () => {
  test('보너스 중복 테스트', () => {    
    const input = [10];
    const includedBonus = [3];
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [11, 22, 3, 44, 15, 6],
      [11, 3, 44, 44, 15, 6],
      [7, 4, 12, 41, 3, 6]
    ];
    lottos.forEach(lotto => {
      const result = Validator.bonusValidCheck(input ,lotto);
      expect(result).toBeUndefined();
    });    
    lottos.forEach(lotto => {   
      expect(() => Validator.bonusValidCheck(includedBonus, lotto)).toThrowError();
    });
  });
  
  test('보너스 개수 테스트', () => {   
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [11, 22, 3, 44, 15, 6],
      [11, 3, 44, 44, 15, 6],
      [7, 4, 12, 41, 3, 6]
    ]; 
    const input = [23];
    const includedBonus = [1, 2];
    lottos.forEach(lotto => {
      const result = Validator.bonusValidCheck(input ,lotto);
      expect(result).toBeUndefined();
    });    
    lottos.forEach(lotto => {   
      expect(() => Validator.bonusValidCheck(includedBonus, lotto)).toThrowError();
    });
  });
  
  test('보너스 범위 테스트', () => {   
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [11, 22, 3, 44, 15, 6],
      [11, 3, 44, 44, 15, 6],
      [7, 4, 12, 41, 3, 6]
    ]; 
    const input = [23];
    const notRangeBonus = [-1, 47, 100, 231, 0];
    lottos.forEach(lotto => {
      const result = Validator.bonusValidCheck(input ,lotto);
      expect(result).toBeUndefined();
    });    
    lottos.forEach(lotto => {   
      notRangeBonus.forEach(bonus => {
        expect(() => Validator.bonusValidCheck(bonus, lotto)).toThrowError();
      });
    });
  });
  
  test('보너스 소수 테스트', () => {   
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [11, 22, 3, 44, 15, 6],
      [11, 3, 44, 44, 15, 6],
      [7, 4, 12, 41, 3, 6]
    ]; 
    const input = [23.0];
    const demicalBonus = [1.6, 32.1, 41.3];
    lottos.forEach(lotto => {
      const result = Validator.bonusValidCheck(input ,lotto);
      expect(result).toBeUndefined();
    });    
    lottos.forEach(lotto => {   
      demicalBonus.forEach(bonus => {
        expect(() => Validator.bonusValidCheck(bonus, lotto)).toThrowError();
      });
    });
  });
});