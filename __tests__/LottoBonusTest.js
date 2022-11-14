const LottoBonus = require("../src/LottoBonus");

describe("로또 클래스 테스트", () => {
  test("1~45 사이의 숫자가 나오지 않으면 에러가 발생한다.", () => {
    expect(() => {
      new LottoBonus("46");
    }).toThrow("[ERROR]");
  });
});
