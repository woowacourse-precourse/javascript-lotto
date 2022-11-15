const Money = require("../src/Money");

describe("금액 클래스 테스트", () => {
    test("금액이 숫자가 아니면 예외가 발생한다.", () => {
        expect(() => {
            new Money(["100a"]);
        }).toThrow("[ERROR] 숫자를 입력해주세요.");
    });

    test("금액이 실수이면 예외가 발생한다.", () => {
        expect(() => {
            new Money([1000.1]);
        }).toThrow("[ERROR] 실수가 아닌 금액을 입력해주세요.");
    });

    test("금액이 1000원 미만이면 예외가 발생한다.", () => {
        expect(() => {
            new Money([100]);
        }).toThrow("[ERROR] 천원 이상의 금액을 입력해주세요.");
    });

    test("금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
        expect(() => {
            new Money([10001]);
        }).toThrow("[ERROR] 천원 단위의 금액으로 입력해주세요.");
    });
});