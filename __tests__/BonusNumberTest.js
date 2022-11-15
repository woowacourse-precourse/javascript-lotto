const BonusNumber = require("../src/BonusNumber");

describe("로또 클래스 테스트", () => {
    test("보너스 번호가 로또 번호와 중복이 있는 경우 예외 처리", () => {
        expect(() => {
            new BonusNumber(3, [1, 2, 3, 4, 5, 6]);
        }).toThrow("[ERROR] 보너스 번호는 로또 번호와 중복이 없어야 합니다.");
    });

    test("보너스 번호가 자연수가 아닌경우 예외 처리", () => {
        expect(() => {
            new BonusNumber(1.1,[1, 2, 3, 4, 5, 6]);
        }).toThrow("[ERROR] 로또 번호는 자연수여야 합니다.");
    });

    test("보너스 번호가 1부터 45사이의 수가 아닌경우 예외 처리 1", () => {
        expect(() => {
            new BonusNumber(-1,[1, 2, 3, 4, 5, 6]);
        }).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 수여야 합니다.");
    });

    test("보너스 번호가 1부터 45사이의 수가 아닌경우 예외 처리 2", () => {
        expect(() => {
            new BonusNumber(50,[1, 2, 3, 4, 5, 6]);
        }).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 수여야 합니다.");
    });
});
