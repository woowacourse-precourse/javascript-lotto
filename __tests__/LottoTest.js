const Lotto = require('../src/Lotto');
const { InputException, BonusException } = require('../src/Exception');

describe('로또 클래스 테스트', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow('[ERROR]');
    });

    // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow('[ERROR]');
    });

    // 아래에 추가 테스트 작성 가능
});

describe('예외 사항 테스트', () => {
    test('입력 금액이 천원 단위인지 확인', () => {
        expect(() => {
            new InputException('13200');
        }).toThrow('[ERROR]');

        expect(() => {
            new InputException('13010');
        }).toThrow('[ERROR]');

        expect(() => {
            new InputException('130100');
        }).toThrow('[ERROR]');
    });

    test('당첨 번호의 개수가 6개인지 확인', () => {
        expect(() => {
            new Lotto(['1', '2', '3', '4', '5', '6', '7']);
        }).toThrow('[ERROR]');

        expect(() => {
            new Lotto(['1', '2', '3', '4', '5']);
        }).toThrow('[ERROR]');
    });

    test('당첨 번호가 숫자인지 확인 (보너스 번호 포함 x)', () => {
        expect(() => {
            new Lotto(['1', '2', '3', '4', '5', 'a']);
        }).toThrow('[ERROR]');

        expect(() => {
            new Lotto(['1', '2', '3', '4', '5', 'a1']);
        }).toThrow('[ERROR]');
    });

    test('당첨 번호가 서로 다른 수인지 확인', () => {
        expect(() => {
            new Lotto(['1', '2', '3', '4', '5', '3']);
        }).toThrow('[ERROR]');
    });

    test('당첨 번호가 범위 내의 수로 이뤄져 있는지 확인', () => {
        expect(() => {
            new Lotto(['1', '2', '3', '4', '5', '46']);
        }).toThrow('[ERROR]');

        expect(() => {
            new Lotto(['1', '2', '3', '4', '5', '-7']);
        }).toThrow('[ERROR]');
    });

    test('보너스 번호가 숫자인지 확인', () => {
        expect(() => {
            new BonusException('a3');
        }).toThrow('[ERROR]');
    });

    test('보너스 번호가 당첨번호에 포함되는지 확인', () => {
        expect(() => {
            new BonusException('3', ['1', '2', '3', '4', '5', '6']);
        }).toThrow('[ERROR]');
    });

    test('보너스 번호가 범위 내의 숫자인지 확인', () => {
        expect(() => {
            new BonusException('100');
        }).toThrow('[ERROR]');

        expect(() => {
            new BonusException('-3');
        }).toThrow('[ERROR]');
    });
});
