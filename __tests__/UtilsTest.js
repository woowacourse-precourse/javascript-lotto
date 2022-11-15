const { parseAnswerInput } = require("../src/Utils");

describe("utils 테스트", () => {
  test("문자열을 숫자배열로 변환한다.", () => {
    expect(parseAnswerInput("1,2,,d")).toStrictEqual([1, 2, 0, NaN]);
  });
});
