const {sortAscending, roundToTwo} = require('../src/Util');

describe("유틸 클래스 테스트", () => {
    test("sortAscending 테스트", () => {
        let array = [6, 5, 4, 3, 2, 1]
        sortAscending(array)

        expect(array).toEqual([1, 2, 3, 4, 5, 6])
    });

    test("sortAscending 테스트 1", () => {
        expect(roundToTwo(0.005)).toEqual(0.01)
    });

    test("sortAscending 테스트 2", () => {
        expect(roundToTwo(0.001)).toEqual(0)
    });
});
