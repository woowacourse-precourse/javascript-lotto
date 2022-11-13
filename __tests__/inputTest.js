const isValidUserNumberInput = require("../src/ValidationCheck.js");
const Console = require("@woowacourse/mission-utils");


describe("구입 금액 입력 예외 처리 테스트", () => {
    test(`입력 변수는 숫자로만 이루어져 있어야 함`, () => {
        const input = "4000b";
        const result = isValidUserNumberInput(input);
        const output = {isValid : false, errorType : "INVALID_INPUT_TYPE"};
        expect(result).toEqual(output);
    });

    test(`천의 단위로 나뉘어 떨어지지 않음`, () => {
        const input = 3999;
        const result = isValidUserNumberInput(input);
        const output = {isValid : false, errorType : "NOT_DIVISIBLE_BY_1000"};
        expect(result).toEqual(output);
    });
});