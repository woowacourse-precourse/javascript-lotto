const {sortAscending} = require('../src/Util');

describe("유틸 클래스 테스트", () => {
    test("sortAscending 테스트", () => {
        let array = [6, 5, 4, 3, 2, 1]
        sortAscending(array)

        expect(array).toEqual([1, 2, 3, 4, 5, 6])
    });
});
