const { STATIC_RANK } = require("../src/constants/gameCondition");
const LottoRank = require("../src/domain/LottoRank");

describe("LottoRank 클래스 테스트", () => {
  test("당첨 번호와 일치되는 개수와 보너스 번호 포함 여부로 로또의 등수를 알 수 있다.", () => {
    expect(new LottoRank().getRank(5, true)).toEqual(STATIC_RANK.SECOND_RANK);
  });
});
