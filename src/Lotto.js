const { Console } = require("@woowacourse/mission-utils");
const { LOTTO_LENGTH, ERROR, RESULT } = require("./constant/lotto");
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
    this.isNotVaildLength(numbers);
    this.isNotDiffNumbers(numbers);

    const orderedNumbers = numbers.sort((a, b) => a - b);
    this.isNotInVaildRange(orderedNumbers[0]);
    this.isNotInVaildRange(orderedNumbers[5]);
  }

  isNotVaildLength(numbers) {
    if (numbers.length !== LOTTO_LENGTH)
      this.utils.throwError(ERROR.NOT_SIX_NUMBERS);
  }

  isNotDiffNumbers(numbers) {
    const numberSet = new Set(numbers);
    if (numberSet.size !== LOTTO_LENGTH)
      this.utils.throwError(ERROR.DUPLICATE_NUMBERS);
  }

  isNotInVaildRange(number) {
    if (!(+number > 0 && +number <= 45))
      this.utils.throwError(ERROR.NOT_IN_VAILD_RANGE);
  }

  getWinningNumbers() {
    return this.#numbers;
  }

  setBonusNumber(number) {
    this.isNotInVaildRange(number);
    this.bonusNumber = number;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }

  compareTickets(lotteryTickets) {
    for (let ticket of lotteryTickets) {
      let matchedNum = this.#numbers.filter((x) => ticket.includes(+x));

      if (matchedNum.length == 5 && this.compareBonusNumber(ticket)) {
        let value = this.resultMap.get("5B");
        this.resultMap.set("5B", value + 1);
      }
      if (matchedNum.length >= 3) {
        let value = this.resultMap.get(matchedNum.length);
        this.resultMap.set(matchedNum.length, value + 1);
      }
    }
    this.printResultMessage(this.resultMap);
  }

  compareBonusNumber(ticket) {
    return ticket.includes(+this.bonusNumber);
  }

  printResultMessage(resultMap) {
    Console.print(`${RESULT.THREE_MATCH}${resultMap.get(3)}${RESULT.UNIT}`);
    Console.print(`${RESULT.FOUR_MATCH}${resultMap.get(4)}${RESULT.UNIT}`);
    Console.print(`${RESULT.FIVE_MATCH}${resultMap.get(5)}${RESULT.UNIT}`);
    Console.print(
      `${RESULT.FIVE_MATCH_WITH_BONUS}${resultMap.get("5B")}${RESULT.UNIT}`
    );
    Console.print(`${RESULT.SIX_MATCH}${resultMap.get(6)}${RESULT.UNIT}`);
  }
}

module.exports = Lotto;
