const InputAcceptor = require("../src/InputAcceptor");

describe("인풋 처리 테스트", () => {
    test("stringToNumber 1개 인풋 테스트", () => {
        expect(InputAcceptor.stringToNumber("1")).toEqual(1);
    });

    test("stringToNumber 배열 인풋 테스트", () => {
        const stringArray = ["1", "2,", "3", "4", "5"];
        expect(InputAcceptor.stringToNumber(stringArray)).toEqual([1, 2, 3, 4, 5]);
    });

    test("checkANumber: 숫자가 아닌 문자에 대해 에러 발생 테스트", () => {
        const str = 'a';
        expect(() => InputAcceptor.checkANumber(str)).toThrow("[ERROR] 숫자만 입력해주세요.");
    });

    test("checkANumber: 숫자 문자에 대해 true 반환 테스트", () => {
        const str = '1';
        expect(InputAcceptor.checkANumber(str)).toBeTruthy();
    });

    test("checkNumbers: 숫자가 아닌 문자가 포함된 배열 에러 발생 테스트1", () => {
        const strArray = ['1', '2', 'a'];
        expect(() => InputAcceptor.checkNumbers(strArray)).toThrow("[ERROR] 숫자만 입력해주세요.");
    });

    test("checkNumbers: 숫자가 아닌 문자가 포함된 배열 에러 발생 테스트2", () => {
        const strArray = ['1', '', '3'];
        expect(() => InputAcceptor.checkNumbers(strArray)).toThrow("[ERROR] 숫자만 입력해주세요.");
    });

    test("checkNumbers: 숫자 문자만 포함된 true 반환 테스트", () => {
        const strArray = ['1', '2', '3'];
        expect(InputAcceptor.checkNumbers(strArray)).toBeTruthy();
    });
})