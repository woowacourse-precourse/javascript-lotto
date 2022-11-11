const App = require("../src/App");


describe("사용자 입력 테스트", () => {

    let app;
    beforeEach(() => {
        app = new App();
    });

    test("금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
        expect(app.countLottos("1234")).toThrow("[ERROR]");
    })

    test("금액은 숫자가 아니면 예외가 발생한다.", () => {
        expect(app.countLottos("14,000")).toThrow("[ERROR]");
    })
})