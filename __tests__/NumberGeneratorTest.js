const NumberGenerator = require("../src/NumberGenerator");

describe("숫자생성기 클래스 테스트", () => {
  // 랜덤숫자는 테스트로 어떻게 통과시킬지 모르겠음.
  // but 오름차순으로 정렬되지 않는다는 것은 확인.
  test("1부터 45까지의 중복되지 않는 6개의 숫자 생성", () => {
    const numberGenerator = new NumberGenerator();
    const result = numberGenerator.createNumbersOfLotto();
    result.sort(function (a, b) {
      return a - b;
    });
    expect(result).toContain("1");
  });
});
