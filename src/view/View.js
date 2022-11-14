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

  getPurchasingAmountFromUser() {
    Console.readLine(PURCHASE_MESSAGE.INPUT, (userInput) => {
      this.controller.setPurchasingAmount(userInput);
    });
  }

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

  getWinningNumberFromUser() {
    Console.readLine(WINNING_NUMBER_MESSAGE.INPUT, (userInput) => {
      this.controller.setWinningNumberFromUser(userInput);
    });
  }

  getBonusNumberFromUser() {
    Console.readLine(BONUS_NUMBER_MESSAGE.INPUT, (userInput) => {
      this.controller.setBonusNumberFromUser(userInput);
    });
  }

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
