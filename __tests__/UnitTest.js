const { prizeMsg, toCurrencyFormat, yieldMsg } = require("../src/utils/string");

describe("toCurrencyFormat 함수 테스트", () => {
  test("숫자 형식을 금액으로 변경하기", () => {
    expect(toCurrencyFormat(5000)).toBe("5,000");
    expect(toCurrencyFormat(2000000000)).toBe("2,000,000,000");
  });
});
describe("prizeMsg 함수 테스트", () => {
  test("3개 일치한 로또 1개 존재", () => {
    expect(prizeMsg("FIFTH", 1)).toBe("3개 일치 (5,000원) - 1개");
    expect(prizeMsg("SECOND", 0)).toBe(
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개"
    );
  });
});
describe("yieldMsg 함수 테스트", () => {
  test("수익률 계산 테스트", () => {
    expect(yieldMsg(2000, 1000)).toBe(`총 수익률은 50%입니다.`);
    expect(yieldMsg(5000, 50000)).toBe(`총 수익률은 1000%입니다.`);
  });
});
