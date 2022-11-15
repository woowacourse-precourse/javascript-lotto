const Utils = require("../src/Utils");

describe("유틸 클래스 테스트", () => {
  test("transformArrayToString: 배열 자료형을 문자열 형태로 변환한다.", () => {
    const TEST_CASE = [
      {
        array: [1, 2, 3, 4, 5, 6],
        result: "[1, 2, 3, 4, 5, 6]",
      },
    ];

    TEST_CASE.forEach(({ array, result }) => {
      expect(Utils.transformArrayToString(array)).toEqual(result);
    });
  });

  test("transformStringToNumberArray: 문자열을 배열로 변환한다.", () => {
    const TEST_CASE = [
      {
        string: "1, 2, 3, 4, 5, 6",
        result: [1, 2, 3, 4, 5, 6],
      },
      {
        string: "1,2,3,4,5,6",
        result: [1, 2, 3, 4, 5, 6],
      },
    ];

    TEST_CASE.forEach(({ string, result }) => {
      expect(Utils.transformStringToNumberArray(string)).toEqual(result);
    });
  });
});
