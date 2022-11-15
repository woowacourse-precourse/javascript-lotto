const isValidUserNumberInput = require("../src/ValidationCheck.js");
const Console = require("@woowacourse/mission-utils");
const CONDITION = require("../src/condition");
const Lotto = require("../src/Lotto");


describe("구입 금액 입력 예외 처리 테스트", () => {
    test(`입력 변수는 숫자로만 이루어져 있어야 함`, () => {
        const input = "4000b";
        const result = isValidUserNumberInput(input);
        const output = {isValid : false, errorType : "[ERROR] INVALID_INPUT_TYPE"};
        expect(result).toEqual(output);
    });

    test(`천의 단위로 나뉘어 떨어지지 않음`, () => {
        const input = "3999";
        const result = isValidUserNumberInput(input);
        const output = {isValid : false, errorType : "[ERROR] NOT_DIVISIBLE_BY_1000"};
        expect(result).toEqual(output);
    });

    test(`정상적인 입력`, () => {
        const input = "4000";
        const result = isValidUserNumberInput(input);
        const output = {isValid : true};
        expect(result).toEqual(output);
    });
});

describe("당첨 번호 입력 예외 처리 테스트", () => {
    test(`당첨 번호 입력 변수의 길이가 ${CONDITION.LOTTO_WINNING_NUMBER_LENGTH}이 아님`, () => {
        const NUM_RANGE = 6;
        var numbers = [1,3,5,7,9,11,13];
        numbers = numbers.toString().split(",");
        expect(() => {
            const lotto = new Lotto();
            Lotto.vaildate(numbers);
        }).toThrow();
    });
    test(`당첨 번호 입력 변수가 숫자가 아님`, () => {
        var notNumbers = "a12345";
        const result = isValidUserNumberInput(notNumbers);
        expect(() => {
            const lotto = new Lotto();
            lotto.vaildate(notNumbers);
        }).toThrow();
    });
    test(`당첨 번호가 ${CONDITION.LOTTO_MIN_LANGE}이상 ${CONDITION.LOTTO_MAX_LANGE}이하가 아님`, () => {
        const lotto = new Lotto();
        var outOfRange = [3,46,-1,5,14,1];
        const result = outOfRange.every((outOfRange) => !lotto.validate(outOfRange));
        expect(result).toEqual(false);
    })
});