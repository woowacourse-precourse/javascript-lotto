const Bonus = require('../src/BonusLotto');

describe('보너스 로또 클래스 테스트', () => {
    test('보너스 번호는 숫자외의 문자를 입력받으면 예외가 발생한다.', () => {
        expect(() => {
            new Bonus(['a', '에러']);
        }).toThrow('[ERROR]');
    });

    test('보너스 번호를 0개 또는 2개이상 입력받으면 예외가 발생한다.', () => {
        expect(() => {
            new Bonus([1, 2]);
        }).toThrow('[ERROR]');
    });

    test('보너스 번호를 0개 또는 2개이상 입력받으면 예외가 발생한다.', () => {
        expect(() => {
            new Bonus([]);
        }).toThrow('[ERROR]');
    });

    test('보너스 번호가 1~45사이의 숫자를 입력받으면 예외를 발생한다.', () => {
        expect(() => {
            new Bonus([46]);
        }).toThrow('[ERROR]');
    });

    test('보너스 번호는 당첨 번호와 중복되면 예외를 발생시킨다.', () => {
        expect(() => {
            new Bonus([1, 2, 3, 4, 5, 6], [1]);
        }).toThrow('[ERROR]');
    });
});
