const { print, close } = require("../utils/MissionUtils");
const MissionUtils = require("@woowacourse/mission-utils");
const {
  MESSAGE_ACCORDING_CORRECT_COUNT,
  MESSAGE_ACCORDING_PRIZE_MONEY,
  MESSAGE_ACCORDING_ACTION,
  MESSAGE_ACCORDING_INPUT_ACTION,
} = require("../constants/Message");
const { LOTTO_INFO } = require("../constants/Value");

class view {
  #winngingResult;

  rankingResult(winningResults) {
    this.#winngingResult = winningResults;
    MissionUtils.Console.print(MESSAGE_ACCORDING_ACTION.NOTIFY_WINNING);
    [...Array(LOTTO_INFO.LEAST_PLACE).keys()]
      .map((key) => key + 1)
      .reverse()
      .forEach((place) => {
        MissionUtils.Console.print(
          `${MESSAGE_ACCORDING_CORRECT_COUNT[place]} ${
            MESSAGE_ACCORDING_PRIZE_MONEY[place]
          } ${this.#winngingResult[place]}개`
        );
      });
  }

  eariningRate(percentage) {
    MissionUtils.Console.print(
      MESSAGE_ACCORDING_INPUT_ACTION.RETURN_EARNING_RATE(percentage)
    );
    close();
  }

  purchasedSize(purchaseNumbers) {
    MissionUtils.Console.print(
      MESSAGE_ACCORDING_INPUT_ACTION.RETURN_PURCHASED_LENGTH(
        purchaseNumbers.length
      )
    );
  }

  purchasedList(purchaseNumbers) {
    Array.from(purchaseNumbers).forEach((lotto) =>
      MissionUtils.Console.print(`[${lotto.join(", ")}]`)
    );
  }
}
module.exports = view;
