const { Random, Console } = require("@woowacourse/mission-utils");

const { MIN, MAX, NUMBERS_LENGTH, RANK_REWARD } = require("../constant");
const Lotto = require("../Lotto");
const MESSAGE = require("../constant/message");
const { commaizeNumber } = require("../utils/common");

class LottoUtils {
  static printLottoCount(count) {
    Console.print(MESSAGE.PURCHASE(count));
  }

  static printLotto(tickets) {
    tickets.forEach((ticket) => {
      Console.print(ticket.numbers);
    });
  }

  static createLottos(count) {
    const tickets = Array.from(
      { length: count },
      () => new Lotto(Random.pickUniqueNumbersInRange(MIN, MAX, NUMBERS_LENGTH))
    );
    return tickets;
  }

  static splitComma(string) {
    return string.split(",").map((item) => parseInt(item));
  }

  static getLottoResult(tickets, winningNumbers, bonusNumber) {
    const result = {
      [3]: 0,
      [4]: 0,
      [5]: 0,
      Bonus: 0,
      [6]: 0,
    };

    tickets.forEach((ticket) => {
      const count = ticket.countMatch(winningNumbers);
      if (count < 3) {
        return;
      }

      if (count === 5 && ticket.hasBonusNumber(bonusNumber)) {
        result.Bonus += 1;
        return;
      }

      result[count] += 1;
    });

    return result;
  }

  static printResult(result) {
    Console.print(MESSAGE.RESULT);
    console.log(result);
    Object.keys(result).forEach((key) => {
      console.log(key);
      Console.print(
        MESSAGE.RANK(key, result[key], commaizeNumber(RANK_REWARD[key]))
      );
    });
  }
}

module.exports = LottoUtils;
