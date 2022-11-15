const BonusNumber = require("../src/BonusNumber");

describe("로또 클래스 테스트", () => {
    test("보너스 번호가 로또 번호와 중복이 있는 경우 예외 처리", () => {
        expect(() => {
            new BonusNumber(3, [1, 2, 3, 4, 5, 5]);
        }).toThrow("[ERROR] 보너스 번호는 로또 번호와 중복이 없어야 합니다.");
    });
});
