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

  test("getRank는 로또 번호와 당첨 번호, 보너스 번호를 입력하면 등수를 반환한다.", () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 7, 3, 4, 5, 6],
      [1, 8, 3, 4, 5, 6],
      [1, 8, 9, 4, 5, 6],
      [1, 8, 9, 10, 5, 6],
      [1, 8, 9, 10, 11, 6],
      [1, 8, 9, 10, 11, 12],
    ];
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const ranks = [1, 2, 3, 4, 5, undefined, undefined];

    lottos.forEach((lotto, i) => {
      expect(GameUtils.getRank(lotto, winningNumber, bonusNumber)).toEqual(
        ranks[i]
      );
    });
  });
