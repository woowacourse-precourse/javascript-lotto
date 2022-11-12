const Purchase = require("../src/Purchase");

describe("구매 클래스 테스트", () => {
    test("구입 금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
        expect(() => {
            new Purchase("1234");
        }).toThrow("[ERROR]");
    });

    // 아래에 추가 테스트 작성 가능
});
