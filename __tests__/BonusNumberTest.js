const BonusNumber = require("../src/BonusNumber.js");
const Lotto = require("../src/Lotto.js");

describe("보너스 숫자 클래스 테스트", () => {
    test("입력값이 음수이면 예외 처리.", () => {
        expect(() => {
            const lotto = new Lotto([1, 2, 3, 4, 5, 6]); 
            new BonusNumber(-7, lotto.getNumbers());
        }).toThrow("[ERROR]");
    });
    
    test("입력값이 실수이면 예외 처리.", () => {
        expect(() => {
            const lotto = new Lotto([1, 2, 3, 4, 5, 6]); 
            new BonusNumber(7.1, lotto.getNumbers());
        }).toThrow("[ERROR]");
    });

    test("입력값이 문자이면 예외 처리.", () => {
        expect(() => {
            const lotto = new Lotto([1, 2, 3, 4, 5, 6]); 
            new BonusNumber('a', lotto.getNumbers());
        }).toThrow("[ERROR]");
    });

    test("로또 번호와 보너스 숫자가 중복되면 예외 처리.", () => {
        expect(() => {
            const lotto = new Lotto([1, 2, 3, 4, 5, 6]); 
            new BonusNumber(6, lotto.getNumbers());
        }).toThrow("[ERROR]");
    });

    test("보너스 숫자가 1~45범위가 아닐 경우 예외 처리.", () => {
        expect(() => {
            const lotto = new Lotto([1, 2, 3, 4, 5, 6]); 
            new BonusNumber(0, lotto.getNumbers());
        }).toThrow("[ERROR]");
    });
});
