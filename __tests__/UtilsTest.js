const { Console } = require("@woowacourse/mission-utils");
const Utils = require("../src/Utils");


afterEach(() => {
  Console.close();
});

describe("Utils 클래스 테스트", () => {
  test("string이 들어오면 Number로 변환", () => {
    const utils = new Utils();
    const input = "1,2,3,4,5,6";
    const result = [1, 2, 3, 4, 5, 6];
    const transeInput = utils.transeStringToNumber(input);
    expect(transeInput).toStrictEqual(result);
  });

});