const MyLotto = require("../src/MyLotto");
import {sortAscending} from '../src/Util';

describe("유틸 클래스 테스트", () => {
    test("sortAscending 테스트", () => {
        expect(() => {
            sortAscending([6, 5, 4, 3, 2, 1])
        }).toEqual([1, 2, 3, 4, 5, 6])
    });
});
