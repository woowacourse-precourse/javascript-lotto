const LottoBonus = require("../src/LottoBonus");

describe.only("로또 클래스 테스트", () => {
  test("숫자 말고 다른 값이 들어가면 에러가 발생한다.", () => {
    expect(() => {
      new LottoBonus("a1");
    }).toThrow("[ERROR]");
  });

  test("1~45 사이의 숫자가 나오지 않으면 에러가 발생한다.", () => {
    expect(() => {
      new LottoBonus("46");
    }).toThrow("[ERROR]");
  });
});
