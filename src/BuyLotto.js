const { Random, Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/constant");

class BuyLotto {
  howMuch() {
    Console.readLine(MESSAGE.BUYING_AMOUNT, (inputValue) => {
      if (inputValue % 1000 !== 0) {
        throw new Error("[ERROR] 1000원 단위로 입력이 되어야합니다.");
      }
      return inputValue;
    });
    return;
  }

  getAutoNumber(buyAmount) {
    amount = buyAmount / 1000;
    const makeNumbers = [];
    for (let i = 1; i <= amount; i++) {
      const number = Random.pickUniqueNumbersInRange(1, 45, 6);
      makeNumbers.push(number);
    }
  }
}

module.exports = BuyLotto;
