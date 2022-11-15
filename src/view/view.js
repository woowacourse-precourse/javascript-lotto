const { print } = require("../utils/MissionUtils");
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
    print(MESSAGE_ACCORDING_ACTION.NOTIFY_WINNING);
    [...Array(LOTTO_INFO.LEAST_PLACE).keys()]
      .map((key) => key + 1)
      .reverse()
      .forEach((place) => {
        print(
          `${MESSAGE_ACCORDING_CORRECT_COUNT[place]} ${
            MESSAGE_ACCORDING_PRIZE_MONEY[place]
          } ${this.#winngingResult[place]}개`
        );
      });
  }

  eariningRate(percentage) {
    print(MESSAGE_ACCORDING_INPUT_ACTION.RETURN_EARNING_RATE(percentage));
  }

  purchasedSize(purchaseNumbers) {
    print(
      MESSAGE_ACCORDING_INPUT_ACTION.RETURN_PURCHASED_LENGTH(
        purchaseNumbers.length
      )
    );
  }

  purchasedList(purchaseNumbers) {
    Array.from(purchaseNumbers).forEach((lotto) =>
      print(`[${lotto.join(", ")}]`)
    );
  }
}
module.exports = view;
