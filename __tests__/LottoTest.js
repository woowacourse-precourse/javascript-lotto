const Lotto = require('../src/Lotto');
const { InputException, LottoException } = require('../src/Exception');

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

describe.only('예외 사항 테스트', () => {
    test('입력 금액이 천원 단위인지 확인', () => {
        expect(() => {
            const exception = new InputException('13200');
            exception.checkInputException();
        }).toThrow('[ERROR]');

        expect(() => {
            const exception = new InputException('13010');
            exception.checkInputException();
        }).toThrow('[ERROR]');

        expect(() => {
            const exception = new InputException('130100');
            exception.checkInputException();
        }).toThrow('[ERROR]');
    });

    test('당첨 번호의 갯수가 6개인지 확인', () => {
        expect(() => {
            const exception = new LottoException(
                ['1', '2', '3', '4', '5', '6', '7'],
                '8'
            );
            exception.checkLottoException();
        }).toThrow('[ERROR]');

        expect(() => {
            const exception = new LottoException(
                ['1', '2', '3', '4', '5'],
                '6'
            );
            exception.checkLottoException();
        }).toThrow('[ERROR]');
    });

    test('당첨 번호가 숫자인지 확인 (보너스 번호 포함)', () => {
        expect(() => {
            const exception = new LottoException(
                ['1', '2', '3', '4', '5', 'a'],
                '7'
            );
            exception.checkLottoException();
        }).toThrow('[ERROR]');

        expect(() => {
            const exception = new LottoException(
                ['1', '2', '3', '4', '5', '6'],
                'a'
            );
            exception.checkLottoException();
        }).toThrow('[ERROR]');
    });

    test('당첨 번호가 서로 다른 수인지 확인 (보너스 번호 포함)', () => {
        expect(() => {
            const exception = new LottoException(
                ['1', '2', '3', '4', '5', '3'],
                '7'
            );
            exception.checkLottoException();
        }).toThrow('[ERROR]');

        expect(() => {
            const exception = new LottoException(
                ['1', '2', '3', '4', '5', '6'],
                '3'
            );
            exception.checkLottoException();
        }).toThrow('[ERROR]');
    });
});
