const App = require("../src/App");


describe('사용자 입력 예외 테스트', () => {

    let app;
    beforeEach(() => {
        app = new App();
    });

    test('구입 금액이 최소 금액 미만이면 예외가 발생한다.', () => {
        expect(() => {
            app.countLottos('700');
        }).toThrow();
    })

    test('금액이 1000원 단위가 아니면 예외가 발생한다.', () => {
        expect(() => {
            app.countLottos('1234A');
        }).toThrow();
    });

    test('금액 입력 시 콤마(,)는 제외해야 하므로 포함될 경우 예외가 발생한다.', () => {
        expect(() =>{
            app.countLottos('14,000');
        }).toThrow('[ERROR]');
    });

    test('당첨 번호 입력 시 콤마(,)를 사용해 구분해야 한다.', () => {
        expect(() => {
            app.setTargetNumbers('123456');
        }).toThrow("[ERROR]");
    });

    test('당첨 번호는 1~45 사이의 6자리를 입력해야한다.', () => {
        expect(() => {
            app.setTargetNumbers('0,1,2,3,4,5');
        }).toThrow();

        expect(() => {
            app.setTargetNumbers('0,1,2,3,4');
        }).toThrow();
    });

    test('보너스 번호는 1~45 사이의 수를 입력해야 한다.', () => {
        expect(() => {
            app.setBonusNumber('46')
        }).toThrow();
    });

    test('보너스 번호 입력는 1~45 사의 숫자여야만 한다.', () => {
        expect(() => {
            app.setBonusNumber('1A');
        }).toThrow();
    });

})