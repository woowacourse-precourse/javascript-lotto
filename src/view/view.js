const { print } = require("../utils/Missionutils");
const { RANKING } = require("../constants/value");
const {
  MESSAGE_ACCORDING_CORRECT_COUNT,
  MESSAGE_ACCORDING_PRIZE_MONEY,
  MESSAGE_ACCORDING_ACTION
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
          `${MESSAGE_ACCORDING_CORRECT_COUNT[place]} ${MESSAGE_ACCORDING_PRIZE_MONEY[place]} - ${
            this.#winngingResult[place]
          }개`
        );
      });
  }

  eariningRate(percentage) {
    print(`총 수익률은 ${percentage}%입니다.`);
  }

  purchasedSize(purchaseNumbers) {
    print(`\n${purchaseNumbers.size}개를 구매했습니다.`);
  }

  purchasedList(purchaseNumbers) {
    // `[${lotto.getNumbers().join(", ")}]`;
    Array.from(purchaseNumbers).forEach((lotto) => print(`[${lotto.join(", ")}]`));
  }
}
module.exports = view;
