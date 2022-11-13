const userException = require('../src/utils/userException');

describe('1. 사용자의 구입 금액 입력 기능에 대한 예외 처리', () => {
    test('로또 구입 금액이 1,000원으로 나누어 떨어지지 않을 때 예외가 발생한다.', () => {
        const input = '100234';
 
        expect(() => userException.isInDivisible(input))
        .toThrow("[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.");
    });

    test('로또 구입 금액에 공백이 포함될 때 예외가 발생한다.', () => {
        const input = '1 0 0 0';
 
        expect(() => userException.isNotNumber(input))
        .toThrow("[ERROR] 로또 구입 금액은 공백이 포함되지 않은 숫자 형태로 입력해야 합니다.");
    });

    test('로또 구입 금액에 문자가 포함되어 있을 때 예외가 발생한다.', () => {
        const input = '1000rwe';
 
        expect(() => userException.isNotNumber(input))
        .toThrow("[ERROR] 로또 구입 금액은 공백이 포함되지 않은 숫자 형태로 입력해야 합니다.");
    });
    
})