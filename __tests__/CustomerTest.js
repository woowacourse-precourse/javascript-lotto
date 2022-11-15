const Customer = require("../src/module/Customer");

const errorMoneyList = ["", " ", "a", "0", "1", "10", "1 000 ", " 000"];

describe("구매금액 테스트", () => {
    test("구매 금액이 1000원으로 나누어 떨어지는 수가 아니라면 예외가 발생한다.", () => {
        errorMoneyList.map((errorMoney) => {
            expect(() => {
                new Customer().validateMoney(errorMoney);
            }).toThrow("[ERROR] 1,000원으로 나누어 떨어지는 수를 입력해야합니다.");
        });
    });
});
