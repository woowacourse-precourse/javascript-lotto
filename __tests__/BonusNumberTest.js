const BonusNumber = require("../src/BonusNumber");

describe("보너스 숫자 테스트", () => {
    test("보너스 숫자가 자연수가 아니면 예외가 발생한다.", () => {
        expect(() => {
            new BonusNumber([10.1], [1, 2, 3, 4, 5, 6]);
        }).toThrow("[ERROR] 보너스 번호는 자연수여야 합니다.");
    });
    test("보너스 숫자가 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
        expect(() => {
            new BonusNumber([46], [1, 2, 3, 4, 5, 6]);
        }).toThrow("[ERROR] 보너스 번호는 1~45 사이의 숫자입니다.");
    });
    test("보너스 숫자가 로또 당첨 숫자와 중복이면 예외가 발생한다.", () => {
        expect(() => {
            new BonusNumber([1], [1, 2, 3, 4, 5, 6]);
        }).toThrow("[ERROR] 보너스 번호와 당첨 번호 중 중복되는 번호가 없어야 합니다.");
    });
});