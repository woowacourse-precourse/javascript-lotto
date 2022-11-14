const App = require("../src/App");
const Validation = require('../src/Validation');
const game = require('../src/LottoGame');

describe('사용자 입력 예외 테스트', () => {

    let app;
    let lottoGame;
    beforeEach(() => {
        app = new App();
        lottoGame = new game.GameBuilder()
        .lottoLength(6)
        .maxNumber(45)
        .minPrice(1000)
        .build();
    });

    test('구입 금액이 최소 금액 미만이면 예외가 발생한다.', () => {
        expect(() => {
            Validation.validate('700');
        }).toThrow('[ERROR]');
    })

    test('금액이 1000원 단위가 아니면 예외가 발생한다.', () => {
        expect(() => {
            Validation.validate('1234A');
        }).toThrow();
    });

    test('금액 입력 시 콤마(,)는 제외해야 하므로 포함될 경우 예외가 발생한다.', () => {
        expect(() =>{
            Validation.validate('14,000');
        }).toThrow('[ERROR]');
    });

    test('당첨 번호 입력 시 콤마(,)를 사용해 구분해야 한다.', () => {
        expect(() => {
            lottoGame.validateInputTargetNumbers('123456');
        }).toThrow('[ERROR]');
    });

    test('당첨 번호는 1~45 사이의 6자리를 입력해야한다.', () => {
        expect(() => {
            lottoGame.validateInputTargetNumbers('0,1,2,3,4,5');
        }).toThrow();

        expect(() => {
            lottoGame.validateInputTargetNumbers('0,1,2,3,4');
        }).toThrow('[ERROR]');
    });

    test('보너스 번호 입력는 1~45 사이의 숫자여야만 한다.', () => {
        let bonus;
        expect(() => {
            bonus = Number('46');
            Validation.validate(bonus, []);
        }).toThrow();

        expect(() => {
            bonus = Number('1A');
            Validation.validate(bonus, []);
        }).toThrow('[ERROR]');
    });

    test('보너스 번호는 당첨 번호와 중복이 되어서는 안된다.', () => {
        expect(() => {
            Validation.validate(7, [1,2,3,4,5,7]);
        }).toThrow('[ERROR]');
    })

})