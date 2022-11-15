const Game = require("../src/Game");

describe("보너스 번호 유효성 테스트", () => {
    const correctNumber = new Game();
    test("보너스 번호가 숫자가 아니다.", () => {
        expect(() => {
            correctNumber.checkBonusNumber('abcd');
        }).toThrow("[ERROR]");
    })

    test("보너스 번호가 1~45 사이의 숫자가 아니다", () => {
        expect(() => {
            correctNumber.checkBonusNumber(46);
        }).toThrow("[ERROR]");
    })
})