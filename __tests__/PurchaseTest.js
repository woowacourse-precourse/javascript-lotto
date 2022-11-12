const App = require("../src/App");

describe("구매 입력 테스트", () => {
    let app;

    beforeEach(() => {
        app = new App();
    })

    test("구입 금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
        expect(() => {
            app.validateAmount("1234");
        }).toThrow("[ERROR]");
    });

    // 아래에 추가 테스트 작성 가능
});
