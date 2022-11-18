const { GAME_MESSAGES } = require("../constants/constants");
const Purchase = require("./Purchase");

class Result {
  purchaseResult;
  result;

  /*아래는 getter 를 이용해서 계산하는 기존 로직
   * TODO: getter 를 사용하지 않고(외부로 상태를 노출시키지 않고) result 구하는 로직?
   */
  // static getMatchCount = () => {
  //   let matchResult;
  //   const AllLottoNumbers = Lotto.;

  //   AllLottoNumbers.forEach((OneLottoNumbers) => {
  //     const winningNumbers = [
  //       ...WinningNumbers.winningNumbers,
  //       BonusNumber.bonusNumber,
  //     ];
  //     matchCount = winningNumbers.filter((num) =>
  //       [1, 2, 3, 7, 8, 9].includes(num)
  //     ).length;
  //   });
  //   return matchResult;
  // };

  // static getResult = (count) => {
  //   const result = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
  //   if (count === 3) result.fifth += 1;
  //   if (count === 4) result.fourth += 1;
  //   if (count === 5) result.third += 1;
  //   if (count === 6) Result.isSecondOrFirst(result);
  // };

  // static isSecondOrFirst = (result) => {
  //   console.log("test_isSecondOrFirst: ", result);
  // };

  // static getProfitRate = (count) => {
  //   let rate = 0;

  //   const returned =
  //     NUMBERS.FIFTH_PRIZE * result.fifth +
  //       NUMBERS.FOURTH_PRIZE * result.fourth +
  //       NUMBERS.THIRD_PRIZE * result.third +
  //       NUMBERS.SECOND_PRIZE * result.second +
  //       NUMBERS.FIRST_PRIZE * result.first || 0;
  //   const purchased = Number(cost);

  //   rate = (returned / purchased) * 100;
  // };

  // static roundOff = (rate) => {
  //   return Number(rate.toFixed(1));
  // };

  // static generateTotalResult = () => {
  //   const count = Lotto.getMatchCount();
  //   const result = Lotto.getResult(count);
  //   const profitRate = Lotto.getProfitRate(count);
  //   const resultMessage = Lotto.generateResultMessage(result, profitRate);
  //   return resultMessage;
  // };

  // static generateResultMessage = (result, profitRate) => {
  //   const resultMessage = `당첨 통계
  //       ---
  //       3개 일치 (5,000원) - ${result.fifth}개
  //       4개 일치 (50,000원) - ${result.fourth}개
  //       5개 일치 (1,500,000원) - ${result.third}개
  //       5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개
  //       6개 일치 (2,000,000,000원) - ${result.first}개
  //       총 수익률은 ${profitRate}%입니다.
  //       `;

  //   return resultMessage;
  // };
}

module.exports = Result;
