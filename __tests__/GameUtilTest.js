const Lotto = require("../src/Lotto");
const GameUtils = require("../src/utils/GameUtils");

describe("게임 유틸 클래스 테스트", () => {
  test("getLottos는 입력된 숫자 크기 만큼의 배열을 반환한다.", () => {
    expect(GameUtils.getLottos(7).length).toEqual(7);
  });

  test("getLottos는 Lotto 객체를 생성한다.", () => {
    const lottos = GameUtils.getLottos(6);
    for (let i = 0; i < 6; i++) {
      expect(lottos[i] instanceof Lotto).toBeTruthy();
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
      expect(
        GameUtils.getRankOfLotto(lotto, winningNumber, bonusNumber)
      ).toEqual(ranks[i]);
    });
  });

  test("getYield는 순위 배열과 구입금액을 입력하면 수익률을 반환한다.", () => {
    const ranks = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0],
      [1, 0, 0, 0, 0],
    ];
    const pay = 7000;
    const answer = [
      "0.0",
      "28571428.6",
      "428571.4",
      "21428.6",
      "714.3",
      "71.4",
    ];

    ranks.forEach((rank, i) => {
      expect(GameUtils.getYield(rank, pay)).toEqual(answer[i]);
    });
  });

  test("getTotalRankArray는 로또들의 순위별 개수를 내림차순으로 배열에 담아 반환한다.", () => {
    const lottos = [];
    const lottoNumbers = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    lottoNumbers.forEach((number) => {
      lottos.push(new Lotto(number));
    });

    expect(
      GameUtils.getTotalRankArray(lottos, winningNumber, bonusNumber)
    ).toEqual([1, 0, 0, 0, 0]);
  });
});
