const Store = require("../src/Store");
const store = new Store();

describe("스토어 클래스 테스트", () => {
    test("입력된 로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
        expect(() => {
            store.isValidWinning([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow("[ERROR]");
    });

    test("입력된 당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            store.isValidWinning([1, 2, 3, 4, 5, 5]);
        }).toThrow("[ERROR]");
    });

    test("입력된 당첨 번호에 숫자 이외의 문자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            store.isValidWinning([1, 'a', 3, 4, 5, 6]);
        }).toThrow("[ERROR]");
    });

    test("입력된 당첨 번호에 숫자 이외의 문자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            store.isValidWinning([1, 'a', 3, 4, 5, 6]);
        }).toThrow("[ERROR]");
    });

    test("입력된 당첨 번호에 1~45 범위 밖의 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            store.isValidWinning([1, 50, 3, 4, 5, 6]);
        }).toThrow("[ERROR]");
    });

    test("입력된 당첨 번호에 누락된 숫자가(숫자 배열에 빈칸이) 있으면 예외가 발생한다.", () => {
        expect(() => {
            store.isValidWinning([1, , 3, 4, 5, 6]);
        }).toThrow("[ERROR]");
    });

    test("입력된 당첨 번호에 정수(자연수)가 아닌 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            store.isValidWinning([1, 1.2, 3, 4, 5, 6]);
        }).toThrow("[ERROR]");
    });

    test("입력된 보너스 번호가 입력된 당첨번호와 중복되면 예외가 발생한다.", () => {
        expect(() => {
            store.winningNumber = [1, 2, 3, 4, 5, 6]
            store.isValidBonus(3);
        }).toThrow("[ERROR]");
    });

    test("입력된 보너스 번호가 소수이면 예외가 발생한다.", () => {
        expect(() => {
            store.isValidBonus(1.5);
        }).toThrow("[ERROR]");
    });

});
