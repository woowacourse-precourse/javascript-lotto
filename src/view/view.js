const { print } = require("../utils/Missionutils");

const {
  MESSAGE_ACCORDING_CORRECT_COUNT,
  MESSAGE_ACCORDING_PRIZE_MONEY,
  MESSAGE_ACCORDING_ACTION,
  MESSAGE_ACCORDING_INPUT_ACTION
} = require("../constants/message");

class view {
  #winngingResult;

  rankingResult(winngingResult) {
    this.#winngingResult = winngingResult;
    print(MESSAGE_ACCORDING_ACTION.NOTIFY_WINNING);
    [...Array(5).keys()]
      .map((key) => key + 1)
      .reverse()
      .forEach((place) => {
        print(
          `${MESSAGE_ACCORDING_CORRECT_COUNT[place]} ${MESSAGE_ACCORDING_PRIZE_MONEY[place]} ${
            this.#winngingResult[place]
          }개`
        );
      });
  }

  eariningRate(percentage) {
    print(MESSAGE_ACCORDING_INPUT_ACTION.RETURN_EARNING_RATE(percentage));
  }

  purchasedSize(purchaseNumbers) {
    print(MESSAGE_ACCORDING_INPUT_ACTION.RETURN_PURCHASED_LENGTH(purchaseNumbers.size));
  }

  purchasedList(purchaseNumbers) {
    Array.from(purchaseNumbers).forEach((lotto) => print(`[${lotto.join(", ")}]`));
  }
}
module.exports = view;
