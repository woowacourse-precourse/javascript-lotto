const userException = require('../src/utils/userException');
const lottoException = require('../src/utils/lottoException');
const numberException = require('../src/utils/numberException');

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

describe('2. 하나의 로또를 발행하는 기능에 대한 예외 처리', () => {
    test('로또의 숫자 갯수가 6개가 아닐 때 예외가 발생한다.', () => {
        const input = [1, 2, 3, 4, 5, 6, 7];
 
        expect(() => lottoException.isNotSix(input))
        .toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
    });
    
    test('로또의 숫자에 벗어난 범위의 수가 있을 때 예외가 발생한다.', () => {
        const input = [1, 42, 3, 44, 5, 46];
 
        expect(() => lottoException.isOutOfRange(input))
        .toThrow("[ERROR] 생성 가능한 로또의 범위는 1~45까지의 수 입니다.");
    });

    test('로또의 숫자들 중 숫자가 아닌 것이 있을 때 예외가 발생한다.', () => {
        const input = [1, '2', 3, 4, 5, 6];
 
        expect(() => lottoException.includeNotNumber(input))
        .toThrow("[ERROR] 생성된 로또에 숫자가 아닌 원소가 포함되어 있습니다.");
    });

    test('로또의 숫자들 중 중복된 것이 있을 때 예외가 발생한다.', () => {
        const input = [1, 1, 3, 4, 5, 6];
 
        expect(() => lottoException.isDuplicated(input))
        .toThrow("[ERROR] 생성된 로또에 중복된 수가 포함되어 있습니다.");
    });
})

describe('3. 사용자의 당첨번호 입력에 대한 예외 처리', () => {
    test('사용자의 당첨 번호 갯수가 6개가 아니면 예외가 발생한다.', () => {
        const input = [1, 2, 3, 4, 5, 6, 7];

        expect(() => numberException.isNotSix(input))
        .toThrow("[ERROR] 당첨 번호는 6개 입니다.");
    })

    test('사용자의 당첨 번호가 모두 숫자가 아닌 경우 예외가 발생한다.', () => {
        const input = [1, 2, ' ', 4, 5, 6];

        expect(() => numberException.includeNotNumber(input))
        .toThrow("[ERROR] 당첨 번호에 숫자가 아닌 원소가 포함되어 있습니다.");
    })

    test('사용자의 당첨 번호 중 중복된 것이 있을 때 예외가 발생한다.', () => {
        const input = [1, 1, 3, 4, 5, 6];
 
        expect(() => numberException.isDuplicated(input))
        .toThrow("[ERROR] 당첨 번호에 중복된 수가 포함되어 있습니다.");
    });
})