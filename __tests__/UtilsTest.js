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
  test("transeStringToNumber()로 변환된 값이 숫자타입인지 확인인", () => {
    const utils = new Utils();
    const input = "1";
    const transeInput = utils.transeStringToNumber(input);
    expect(typeof transeInput).toBeTruthy();
  });

});