const { Random, Console } = require("@woowacourse/mission-utils");

const { MIN, MAX, NUMBERS_LENGTH, RANK_REWARD, PRICE } = require("../constant");
const Lotto = require("../Lotto");
const MESSAGE = require("../constant/message");
const { commaizeNumber, roundNumber } = require("../utils/common");

class LottoUtils {
  static calculateLottoCount(purchaseCost) {
    return Math.floor(purchaseCost / 1000);
  }

  static printLotto(tickets) {
    let count = tickets.length;

    Console.print(MESSAGE.PURCHASE(count));

    tickets.forEach((ticket) => {
      let message = "";
      ticket.numbers.map((number, index) => {
        message += number;
        if (index !== ticket.numbers.length - 1) {
          message += ", ";
        }
      });
      Console.print(`[${message}]`);
    });
  }

  static createLottos(count) {
    const tickets = Array.from(
      { length: count },
      () => new Lotto(Random.pickUniqueNumbersInRange(MIN, MAX, NUMBERS_LENGTH))
    );

    tickets.map((ticket) => ticket.sort());
    return tickets;
  }

  static splitComma(string) {
    return string.split(",").map((item) => parseInt(item));
  }

  static getLottoResult(tickets, winningNumbers, bonusNumber) {
    const result = {
      FIFTH_RANK: 0,
      FOURTH_RANK: 0,
      THIRD_RANK: 0,
      SECOND_RANK: 0,
      FIRST_RANK: 0,
    };

    tickets.forEach((ticket) => {
      const count = ticket.countMatch(winningNumbers);

      if (count < 3) {
        return;
      }

      if (count === 3) {
        result.FIFTH_RANK += 1;
        return;
      }

      if (count === 4) {
        result.FOURTH_RANK += 1;
        return;
      }

      if (count === 5 && ticket.hasBonusNumber(bonusNumber)) {
        result.SECOND_RANK += 1;
        return;
      }

      if (count === 5) {
        result.THIRD_RANK += 1;
        return;
      }

      if (count === 6) {
        result.FIRST_RANK += 1;
        return;
      }
    });
    return result;
  }

  static printResult(lottoTickets, result) {
    Console.print(MESSAGE.RESULT);
    Object.keys(result).forEach((key) => {
      Console.print(
        MESSAGE.RANK(key, commaizeNumber(RANK_REWARD[key]), result[key])
      );
    });
    Console.print(MESSAGE.YIELD(this.getYield(lottoTickets, result)));
  }

  static getYield(lottoTickets, result) {
    const totalReward = Object.keys(result).reduce((acc, key) => {
      return acc + RANK_REWARD[key] * result[key];
    }, 0);

    return roundNumber((totalReward / (lottoTickets.length * PRICE)) * 100);
  }
}

module.exports = LottoUtils;
