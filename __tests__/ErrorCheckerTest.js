const ErrorChecker = require("../src/ErrorChecker");
const ERROR_MESSAGE = require("../src/constants").ERROR_MESSAGE;

describe("에러 체커 클래스 테스트", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
        expect(() => {
            ErrorChecker.checkSixElementArray([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS_NOT_SIX_DIGITS);
    });

    test("로또 번호의 개수가 6개가 미만이면 예외가 발생한다.", () => {
        expect(() => {
            ErrorChecker.checkSixElementArray([1, 2, 3, 4, 5]);
        }).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS_NOT_SIX_DIGITS);
    });

    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            ErrorChecker.checkDuplicatedElement([1, 2, 3, 4, 5, 5], 6);
        }).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS_DUPLICATE);
    });
})