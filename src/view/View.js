const { Console } = require("@woowacourse/mission-utils");
const {
  PURCHASE_MESSAGE,
  WINNING_NUMBER_MESSAGE,
  BONUS_NUMBER_MESSAGE,
  STATISTICS_MESSAGE,
} = require("../constants/messages");

class View {
  constructor(controller) {
    this.controller = controller;
  }

  // 유저 구입 금액을 받는 UI 관련 메서드
  getPurchasingAmountFromUser() {
    Console.readLine(PURCHASE_MESSAGE.INPUT, (userInput) => {
      this.controller.setPurchasingAmount(userInput);
    });
  }

  /**
   * 유저에게 발행된 로또를 출력하는 UI 관련 메서드
   * @param userIssuedLotto {number[][]} [유저에게 발행된 로또]
   */
  printUserIssuedLotto(userIssuedLotto) {
    Console.print(
      `\n${this.controller.userNumber.getUserIssuedLotto().length}${
        PURCHASE_MESSAGE.CONFIRMATION
      }`,
    );
    for (const singleLottoCombination of userIssuedLotto) {
      Console.print(
        `[${singleLottoCombination.toString()}]`.replace(/,/g, ", "),
      );
    }
  }

  // 당첨 번호를 받는 UI 관련 메서드
  getWinningNumberFromUser() {
    Console.readLine(WINNING_NUMBER_MESSAGE.INPUT, (userInput) => {
      this.controller.setWinningNumberFromUser(userInput);
    });
  }

  // 보너스 번호를 받는 UI 관련 메서드
  getBonusNumberFromUser() {
    Console.readLine(BONUS_NUMBER_MESSAGE.INPUT, (userInput) => {
      this.controller.setBonusNumberFromUser(userInput);
    });
  }

  /**
   * 통계를 출력하는 Ui 관련 메서드
   * @param ranks {{first: number, second: number, third: number, fourth: number, fifth: number}} [통계된 등수]
   * @param rateOfReturn {number} [수익률]
   */
  printStatistics(ranks, rateOfReturn) {
    Console.print(STATISTICS_MESSAGE.OPENING);
    const statisticsMessage = `${STATISTICS_MESSAGE.FIFTH}${ranks.fifth}개
${STATISTICS_MESSAGE.FOURTH}${ranks.fourth}개
${STATISTICS_MESSAGE.THIRD}${ranks.third}개
${STATISTICS_MESSAGE.SECOND}${ranks.second}개
${STATISTICS_MESSAGE.FIRST}${ranks.first}개
총 수익률은 ${rateOfReturn}%입니다.`;

    Console.print(statisticsMessage);
    this.controller.finishGame();
  }
}

module.exports = View;
