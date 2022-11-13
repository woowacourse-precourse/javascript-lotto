const { Console } = require("@woowacourse/mission-utils");
const MatchingNumber = require("../src/MatchingNumber");

const totalLottoNumber = [
  [1, 5, 6, 10, 11, 13],
  [1, 2, 3, 4, 5, 6],
];

const winnerNumber = ["1", "5", "6", "10", "11", "12"];

let numbers = [1, 5, 6, 10, 11, 13];

describe("로또 당첨 통계 부분 Test", () => {
  afterEach(() => {
    Console.close();
  });

  describe("5개 일치할때 보너스 번호 포함 테스트", () => {
    test("보너스번호가 포함되어 있지 않을경우 테스트", () => {
      const bonusNumber = "12";
      const matchingNumber = new MatchingNumber(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.isContainBonusNumber(numbers);
      expect(result).toBeFalsy();
    });

    test("보너스번호가 포함되어 있는 경우 테스트", () => {
      const bonusNumber = "13";
      const matchingNumber = new MatchingNumber(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.isContainBonusNumber(numbers);
      expect(result).toBeTruthy();
    });
  });
});
