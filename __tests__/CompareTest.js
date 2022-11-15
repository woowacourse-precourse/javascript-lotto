const CompareLotto = require("../src/CompareLotto");
const MissionUtils = require("@woowacourse/mission-utils");

describe("로또 비교 클래스 테스트", () => {
    test("기능2 테스트", () => {
        expect(new CompareLotto([[6, 8, 22, 33, 35, 41],[2, 3, 17, 24, 28, 36], [5, 14, 15, 16, 32, 39]], [1, 2, 3, 17, 24, 5], 6).resultList).toEqual([0, 4, 1]);
      });

    test("기능3 테스트", () => {
        expect(new CompareLotto([[1, 2, 3, 4, 5, 6, 7]], [1, 2, 3, 8, 9, 10], 4).rankList).toEqual([1,0,0,0,0]);
    });

  

});