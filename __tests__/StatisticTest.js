const { Statistic } = require("../src/Statistics");
const { Player } = require("../src/Player");
const { Lotto } = require("../src/Lotto");
describe("금액 validation 테스트", () => {
  test("로또 번호가 맞은 갯수를 센다", () => {
    const statistic = new Statistic();
    const oneHit = [1, 2, 3, 5, 6, 7];
    const twoHit = [1, 2, 3, 4, 5, 6];
    const threeHit = [1, 4, 24, 25, 26, 27];
    const fourHit = [1, 4, 24, 32, 33, 34];
    const fiveHit = [1, 4, 24, 32, 40, 41];
    const sixHit = [1, 4, 24, 32, 40, 44];

    const winningNumber = [1, 4, 24, 32, 40, 44, 7];
    expect(statistic.countHit(oneHit, winningNumber)).toBe(1);
    expect(statistic.countHit(twoHit, winningNumber)).toBe(2);
    expect(statistic.countHit(threeHit, winningNumber)).toBe(3);
    expect(statistic.countHit(fourHit, winningNumber)).toBe(4);
    expect(statistic.countHit(fiveHit, winningNumber)).toBe(5);
    expect(statistic.countHit(sixHit, winningNumber)).toBe(6);
  });

  test("보너스 번호가 맞았는지를 판단한다", () => {
    const statistic = new Statistic();
    const winningNumber = [1, 4, 24, 32, 40, 44, 7];
    const bonusHit = [1, 4, 7, 24, 32, 40];
    expect(statistic.checkBonusNumber(bonusHit, winningNumber)).toBe(true);
  });

  test("로또 등수를 계산한다", () => {
    const statistic = new Statistic();
    const winningNumber = [1, 4, 24, 32, 40, 44, 7];
    const oneHit = [1, 2, 3, 5, 6, 7];
    const twoHit = [1, 2, 3, 4, 5, 6];
    const threeHit = [1, 4, 24, 25, 26, 27];
    const fourHit = [1, 4, 24, 32, 33, 34];
    const fiveHit = [1, 4, 24, 32, 40, 41];
    const fiveHitBonus = [1, 4, 7, 24, 32, 40];
    const sixHit = [1, 4, 24, 32, 40, 44];
    expect(statistic.checkRank(statistic.countHit(oneHit, winningNumber))).toBe(
      null
    );
    expect(statistic.checkRank(statistic.countHit(twoHit, winningNumber))).toBe(
      null
    );
    expect(
      statistic.checkRank(statistic.countHit(threeHit, winningNumber))
    ).toBe("3hit");
    expect(
      statistic.checkRank(statistic.countHit(fourHit, winningNumber))
    ).toBe("4hit");
    expect(
      statistic.checkRank(statistic.countHit(fiveHit, winningNumber))
    ).toBe("5hit");
    expect(
      statistic.checkRank(
        statistic.countHit(fiveHitBonus, winningNumber),
        statistic.checkBonusNumber(fiveHitBonus, winningNumber)
      )
    ).toBe("5hitBonus");
    expect(statistic.checkRank(statistic.countHit(sixHit, winningNumber))).toBe(
      "6hit"
    );
  });

  test("로또 번호 전체 등수를 센다", () => {
    const statistic = new Statistic();
    const winningNumber = [1, 4, 24, 32, 40, 44, 7];
    const oneHit = [1, 2, 3, 5, 6, 7];
    const twoHit = [1, 2, 3, 4, 5, 6];
    const threeHit = [1, 4, 24, 25, 26, 27];
    const fourHit = [1, 4, 24, 32, 33, 34];
    const fiveHit = [1, 4, 24, 32, 40, 41];
    const fiveHitBonus = [1, 4, 7, 24, 32, 40];
    const sixHit = [1, 4, 24, 32, 40, 44];
    const lottos = [
      oneHit,
      twoHit,
      threeHit,
      fourHit,
      fiveHit,
      fiveHitBonus,
      sixHit,
    ];
    statistic.countRank(lottos, winningNumber);
    expect(statistic.getTotalCount()).toEqual({
      "3hit": 1,
      "4hit": 1,
      "5hit": 1,
      "5hitBonus": 1,
      "6hit": 1,
    });
  });
});
