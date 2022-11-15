const InputAcceptor = require("../src/InputAcceptor");

describe("인풋 처리 테스트", () => {
    test("stringToNumber 1개 인풋 테스트", () => {
        expect(InputAcceptor.stringToNumber("1")).toEqual(1);
    });

    test("stringToNumber 배열 인풋 테스트", () => {
        const stringArray = ["1", "2,", "3", "4", "5"];
        expect(InputAcceptor.stringToNumber(stringArray)).toEqual([1, 2, 3, 4, 5]);
    });
})