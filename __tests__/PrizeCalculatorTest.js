const PrizeCalculator = require("../src/domain/PrizeCalculator.js");

describe("PrizeCalculator.getMatchedLottoNumberCount", () => {
  test("주어진 유저 로또 번호와 당첨 로또 번호를 비교하여 일치 개수를 return 하여야 한다.", () => {
    const prizeCalculator = new PrizeCalculator();
    const playerLottoNumbers = [1, 2, 3, 4, 5, 6];
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    const result = prizeCalculator.getMatchedLottoNumberCount(playerLottoNumbers, winningNumbers);

    expect(result).toBe(6);
  });
});

describe("PrizeCalculator.hasBonusNumber", () => {
  test("주어진 유저 로또 번호에 보너스번호 포함 유무를 return 하여야 한다.", () => {
    const prizeCalculator = new PrizeCalculator();
    const playerLottoNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 6;

    const result = prizeCalculator.hasBonusNumber(playerLottoNumbers, bonusNumber);

    expect(result).toBe(true);
  });
});

describe("PrizeCalculator.getCompareResult", () => {
  test("유저 로또번호와 당첨, 보너스번호를 비교하여 일치 개수와 보너스 번호 포함 유무를 객체로 return 하여야 한다.", () => {
    const prizeCalculator = new PrizeCalculator();
    const playerLottoNumbers = [1, 2, 3, 4, 5, 6];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = prizeCalculator.getCompareResult(
      playerLottoNumbers,
      winningNumbers,
      bonusNumber
    );

    expect(result).toStrictEqual({ matchedLottoNumberCount: 6, hasBonusNumber: false });
  });
});

describe("PrizeCalculator.getLottoPrize", () => {
  test("비교 결과 객체를 받아 등수 정보를 return 하여야 한다.", () => {
    const prizeCalculator = new PrizeCalculator();
    const compareResult = { matchedLottoNumberCount: 6, hasBonusNumber: false };

    const result = prizeCalculator.getLottoPrize(compareResult);

    expect(result).toBe("firstPrize");
  });
});

describe("PrizeCalculator.calculatePrize", () => {
  test("유저의 각 로또번호 목록과, 당첨/보너스번호를 받아 각 로또의 등수 정보를 return하여야 한다.", () => {
    const prizeCalculator = new PrizeCalculator();
    const eachPlayerLottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];
    const winningNumbers = [1, 3, 5, 7, 9, 11];
    const bonusNumber = 13;
    const result = prizeCalculator.calculatePrize(
      eachPlayerLottoNumbers,
      winningNumbers,
      bonusNumber
    );

    expect(result).toStrictEqual(["fifthPrize", "fifthPrize", "fail"]);
  });
});
