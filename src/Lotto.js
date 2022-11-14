const { Console } = require("@woowacourse/mission-utils");
const {
  LOTTO_LENGTH,
  LOTTO_COST,
  ERROR,
  RESULT,
  PRIZE,
} = require("./constant/lotto");
const Utils = require("./utils/utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.utils = new Utils();
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber;
    this.resultMap = new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      ["5B", 0],
      [6, 0],
    ]);
  }

  validate(numbers) {
    this.verifyVaildLength(numbers);
    this.verifyDiffNumbers(numbers);

    const orderedNumbers = numbers.sort((a, b) => a - b);
    this.verifyInVaildRange(orderedNumbers[0]);
    this.verifyInVaildRange(orderedNumbers[5]);
  }

  verifyVaildLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH)
      this.utils.throwError(ERROR.NOT_SIX_NUMBERS);
  }

  verifyDiffNumbers(numbers) {
    const numberSet = new Set(numbers);
    if (numberSet.size !== LOTTO_LENGTH)
      this.utils.throwError(ERROR.DUPLICATE_NUMBERS);
  }

  verifyInVaildRange(number) {
    if (!(+number > 0 && +number <= 45))
      this.utils.throwError(ERROR.NOT_IN_VAILD_RANGE);
  }

  verifyOverlapWithNumbers(number) {
    if (this.#numbers.includes(number))
      this.utils.throwError(ERROR.OVERLAP_WITH_NUMBERS);
  }

  setBonusNumber(number) {
    this.verifyInVaildRange(number);
    this.verifyOverlapWithNumbers(number);

    this.bonusNumber = number;
  }

  printRank(lotteryTickets) {
    this.compareTickets(lotteryTickets);

    Console.print(
      `${RESULT.THREE_MATCH}${this.resultMap.get(3)}${RESULT.UNIT}`
    );
    Console.print(`${RESULT.FOUR_MATCH}${this.resultMap.get(4)}${RESULT.UNIT}`);
    Console.print(`${RESULT.FIVE_MATCH}${this.resultMap.get(5)}${RESULT.UNIT}`);
    Console.print(
      `${RESULT.FIVE_MATCH_WITH_BONUS}${this.resultMap.get("5B")}${RESULT.UNIT}`
    );
    Console.print(`${RESULT.SIX_MATCH}${this.resultMap.get(6)}${RESULT.UNIT}`);
  }

  compareTickets(lotteryTickets) {
    for (const ticket of lotteryTickets) {
      const matchedNum = this.#numbers.filter((x) => ticket.includes(+x));

      if (matchedNum.length == 5 && this.compareBonusNumber(ticket)) {
        const value = this.resultMap.get("5B");
        this.resultMap.set("5B", value + 1);
        continue;
      }
      if (matchedNum.length >= 3) {
        const value = this.resultMap.get(matchedNum.length);
        this.resultMap.set(matchedNum.length, value + 1);
      }
    }
  }

  compareBonusNumber(ticket) {
    return ticket.includes(+this.bonusNumber);
  }

  printProfit(ticketAmount) {
    const ticketPrice = ticketAmount * LOTTO_COST;
    const totalSum = this.sumTotalPrize(this.resultMap);
    const profit = ((totalSum / ticketPrice) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profit}%입니다.`);
  }

  sumTotalPrize(resultMap) {
    return (
      resultMap.get(3) * PRIZE.THREE_MATCH +
      resultMap.get(4) * PRIZE.FOUR_MATCH +
      resultMap.get(5) * PRIZE.FIVE_MATCH +
      resultMap.get("5B") * PRIZE.FIVE_MATCH_WITH_BONUS +
      resultMap.get(6) * PRIZE.SIX_MATCH
    );
  }
}

module.exports = Lotto;
