const { buyAmountCheck, notNumber, notBuy } = require('../src/inputTest/userInputCheck');

describe('Bonus 예외 테스트', () => {
    test('1000원 단위인지 확인', () => {
        expect(() => {
            buyAmountCheck('1500');
        }).toThrow('[ERROR]');
    });
  
    test('보너스 번호가 숫자인지 문자인지 확인', () => {
        expect(() => {
            notNumber('abc');
        }).toThrow('[ERROR]');
    });
  
    test('1000원 미만인지 확인', () => {
        expect(() => {
            notBuy('500');
        }).toThrow('[ERROR]');
    });
});