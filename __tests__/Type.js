const Type = require("../src/Type");

describe("Type 클래스 테스트", () => {
  test("당첨 번호를 배열로 변경한다.", () => {
    const numbers = "1,2,3,4,5,6";

    const type = new Type();
    const result = type.changeType(numbers);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
