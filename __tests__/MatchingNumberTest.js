const MissionUtils = require("@woowacourse/mission-utils");
const MatchingNumber = require("../src/MatchingNumber");

const totalLottoNumber = [
  [1, 5, 6, 10, 11, 13],
  [1, 2, 3, 4, 5, 6],
];

const winnerNumber = ["1", "5", "6", "10", "11", "12"];

const numbers = [1, 5, 6, 10, 11, 13];

describe("로또 당첨 통계 부분 Test", () => {
  afterEach(() => {
    MissionUtils.Console.close();
  });

  test("5개 일치할때 보너스번호가 포함되어 있지 않을경우 결과값은 4인지 테스트", () => {
    const bonusNumber = "12";
    const matchingNumber = new MatchingNumber(totalLottoNumber, winnerNumber, bonusNumber);
    const result = matchingNumber.getNumberOfNumbersCompareWtihBonusNumber(numbers);
    expect(result).toBe(4);
  });

  test("5개 일치할때 보너스번호가 포함되어 있는경우 결과값은 5인지 테스트", () => {
    const bonusNumber = "13";
    const matchingNumber = new MatchingNumber(totalLottoNumber, winnerNumber, bonusNumber);
    const result = matchingNumber.getNumberOfNumbersCompareWtihBonusNumber(numbers);
    expect(result).toBe(5);
  });

  test("순위를 기준으로 나타낸 일치개수가 보너스 번호가 포함된 경우 5인지 테스트", () => {
    const bonusNumber = "13";
    const matchingNumber = new MatchingNumber(totalLottoNumber, winnerNumber, bonusNumber);
    const result = matchingNumber.lineUpNumberOfMatchingNumbersByRank(numbers);
    expect(result).toBe(5);
  });

  test("순위를 기준으로 나타낸 일치개수가 3개 일치할때 2인지 테스트", () => {
    const bonusNumber = "42";
    const matchingNumber = new MatchingNumber(totalLottoNumber, winnerNumber, bonusNumber);
    const result = matchingNumber.lineUpNumberOfMatchingNumbersByRank([1, 5, 6, 15, 16, 17]);
    expect(result).toBe(2);
  });
});
