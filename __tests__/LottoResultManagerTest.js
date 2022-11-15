const LottoResultManager = require("../src/LottoResultManager");

describe("로또 클래스 테스트", () => {
  test("각 등수마다 당첨 개수를 셀 수 있다.", () => {
    const lottoResultManager = new LottoResultManager();
    lottoResultManager.countWin(["rank1", "rank3", "noRank"]);
    expect(lottoResultManager.winCount).toEqual({ rank1: 1, rank2: 0, rank3: 1, rank4: 0, rank5: 0 });
  });
});
