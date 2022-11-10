const Lotto = require("../src/Lotto");
const GameUtils = require("../src/utils/GameUtils");

describe("게임 유틸 클래스 테스트", () => {
  test("getLottos는 입력된 숫자 크기 만큼의 배열을 반환한다.", () => {
    expect(GameUtils.getLottos(7).length).toEqual(7);
  });

  test("getLottos는 Lotto 객체를 생성한다.", () => {
    const lottos = GameUtils.getLottos(6);
    for (let i = 0; i < 6; i++) {
      expect(lottos[i].objectName).toEqual("Lotto");
    }
  });
});
