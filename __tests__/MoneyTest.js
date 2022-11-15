const Game = require("../src/Game");

describe("유저 복권 구입 금액 유효성 테스트", () => {
    const correctNumber = new Game();
    test("1000원으로 나누어떨어지지 않는다.", () => {
        expect(() => {
            correctNumber.checkMoney(2100);
        }).toThrow("[ERROR]");
    })

    test("숫자가 아니다", () => {
        expect(() => {
            correctNumber.checkMoney("abcd");
        }).toThrow("[ERROR]");
    })
})