const { lengthCheck, notNumberCheck, notNumber, limitedNumber, bonusIncludedLotto } = require('../src/inputTest/bonusErrorCheck');

describe('Bonus 예외 테스트', () => {
    test('보너스 번호가 한 자리 숫자인지 확인', () => {
        expect(() => {
            lengthCheck('123');
        }).toThrow('[ERROR]');
    });
  
    test('보너스 번호가 숫자인지 문자인지 확인', () => {
        expect(() => {
            notNumber('abc');
        }).toThrow('[ERROR]');
    });
  
    test('보너스 숫자가 1과 45 사이인지 확인', () => {
        expect(() => {
            limitedNumber(50);
        }).toThrow('[ERROR]');
    });
  
    test('당첨 번호와 보너스 번호가 중복인지 확인', () => {
        expect(() => {
            bonusIncludedLotto(5, [1, 2, 3, 4, 5]);
        }).toThrow('[ERROR]');
    });
});