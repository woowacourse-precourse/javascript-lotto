const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow('[ERROR]');
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow('[ERROR]');
    });

    test('로또 번호에 6개 이하면 예외가 발생한다.', () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5]);
        }).toThrow('[ERROR]');
    });

    test('로또 번호에 1부터 45사이가 아닌 번호를 입력하면 예외가 발생한다.', () => {
        expect(() => {
            new Lotto([0, 2, 3, 4, 5]);
        }).toThrow('[ERROR]');
    });
});

// const errorType = {
//     NOT_SIX_LENGTH: new Error('[ERROR] 6개의 번호를 입력해주세요.'),
//     INCLUDE_NEITHER_NUMBER_NOR_COMMA: new Error(
//         '[ERROR] 번호와 쉼표(,) 이외의 문자를 입력하였습니다.'
//     ),
//     NOT_RANGE_FROM_ONE_TO_FORTYFIVE: new Error(
//         '[ERROR] 1부터 45 사이가 아닌 번호를 입력하였습니다.'
//     ),
//     DUPLICATED_NUMBER: new Error('[ERROR] 번호가 중복되었습니다.'),
//     NOT_NUMBER: new Error('[ERROR] 숫자 이외의 문자를 입력하였습니다.'),
//     COULD_NOT_BUY: new Error('[ERROR] 금액이 부족하여 로또를 구매할 수 없습니다.'),
//     COULD_NOT_BE_DEVIDED_BY_THOUSAND: new Error('[ERROR] 1,000원 단위의 금액이 아닙니다.'),
//     IN_WINNING_NUMBER: new Error('[ERROR] 입력한 당첨 번호들 이외의 번호를 입력해주세요.'),
//     null: '',
// };
