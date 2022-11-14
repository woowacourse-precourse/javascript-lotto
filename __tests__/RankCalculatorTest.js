const RankCalculator = require("../src/domain/RankCalculator");
const Lotto = require("../src/Lotto");
const WinningLotto = require("../src/WinningLotto");

describe("등수 계산기 클래스 테스트", () => {
  test("플레이어의 첫 번째 로또 1등 당첨", () => {
    const playerLottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([13, 14, 15, 16, 17, 18]),
    ];
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);

    const rankCalculator = new RankCalculator(playerLottos, winningLotto);
    const rankCountArray = rankCalculator.getRankCountArray();

    expect(JSON.stringify(rankCountArray)).toEqual(JSON.stringify([1, 0, 0, 0, 0]));
  });

  test("플레이어의 첫 번쨰, 두 번쨰 로또 5등 당첨", () => {
    const playerLottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([13, 14, 15, 16, 17, 18]),
    ];
    const winningLotto = new WinningLotto([4, 5, 6, 7, 8, 9], 10);

    const rankCalculator = new RankCalculator(playerLottos, winningLotto);
    const rankCountArray = rankCalculator.getRankCountArray();

    expect(JSON.stringify(rankCountArray)).toEqual(JSON.stringify([0, 0, 0, 0, 2]));
  });

  test("플레이어의 두 번쨰 로또 2등 당첨", () => {
    const playerLottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([13, 14, 15, 16, 17, 18]),
    ];
    const winningLotto = new WinningLotto([8, 9, 10, 11, 12, 13], 7);

    const rankCalculator = new RankCalculator(playerLottos, winningLotto);
    const rankCountArray = rankCalculator.getRankCountArray();

    expect(JSON.stringify(rankCountArray)).toEqual(JSON.stringify([0, 1, 0, 0, 0]));
  });

  test("당첨 없음", () => {
    const playerLottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
      new Lotto([13, 14, 15, 16, 17, 18]),
    ];
    const winningLotto = new WinningLotto([20, 21, 22, 23, 24, 25], 45);

    const rankCalculator = new RankCalculator(playerLottos, winningLotto);
    const rankCountArray = rankCalculator.getRankCountArray();

    expect(JSON.stringify(rankCountArray)).toEqual(JSON.stringify([0, 0, 0, 0, 0]));
  });
});
