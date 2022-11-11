const App = require("../src/App");


describe('사용자 입력 예외 테스트', () => {

    let app;
    beforeEach(() => {
        app = new App();
    });

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

    test('당첨 번호 입력 시 1~45 사이의 수를 입력해야한다.', () => {
        expect(() => {
            app.setTargetNumbers('0,1,2,3,4,5');
        }).toThrow();
    });

})