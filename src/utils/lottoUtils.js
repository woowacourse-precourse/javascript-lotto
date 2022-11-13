const { Random, Console } = require("@woowacourse/mission-utils");
const { MIN, MAX, NUMBERS_LENGTH } = require("../constant");
const Lotto = require("../Lotto");

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
}

module.exports = LottoUtils;
