const Margin = require("../src/modules/Margin");

describe("수익률 계산", () => {
  test("8000원 입력 -> 5000원 당첨", async () => {
    const MARGIN = new Margin();
    await expect(MARGIN.haveMargin(8000, 5000)).toBe("62.5");
  });

  test("8000원 입력 -> 50000원 당첨", async () => {
    const MARGIN = new Margin();
    await expect(MARGIN.haveMargin(8000, 50000)).toBe("625.0");
  });
});
