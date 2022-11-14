const utils = require("../../src/utils");

describe("utils.sort Test Code", () => {
    test("오름차순 정렬", () => {
        const arr = [1,2,5,71,23,123,32];

        const result = arr.sort((a,b) => utils.ascSort(a,b));
        expect(result).toEqual([1,2,5,23,32,71,123]);
    });

    test("오름차순 정렬", () => {
        const arr = [1,2,5,71,23,123,32,0];

        const result = arr.sort((a,b) => utils.ascSort(a,b));
        expect(result).toEqual([0,1,2,5,23,32,71,123]);
    });
});
