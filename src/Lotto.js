const MissionUtils = require("@woowacourse/mission-utils");
const { IS_ENOUGH, IS_RANGE } = require("./const/ErrorMessages");
const { Console, Random } = MissionUtils;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const NUMBER_LIST = [...new Set(numbers)];
    if (NUMBER_LIST.length !== 6) throw Error(IS_ENOUGH);
    NUMBER_LIST.forEach((number) => {
      if (!Number.isInteger(+number) || number < 1 || number >= 46)
        throw Error(IS_RANGE);
    });
  }

  print() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  win(winnerNumbers, bonusNumber) {
    const INTERSECTION_NUMBERS = this.getIntersectionNumberList(winnerNumbers);

    if (INTERSECTION_NUMBERS.length === 5) {
      const LASTNUM = this.getExceptionNumberList(
        this.#numbers,
        INTERSECTION_NUMBERS,
      )[0];

      if (LASTNUM === bonusNumber) return 2;
      return 3;
    }

    if (INTERSECTION_NUMBERS.length === 6) return 1;

    return 6 - INTERSECTION_NUMBERS.length + 2;
  }

  getIntersectionNumberList(winnerNumbers) {
    const INTERSECTION_NUMBERS = [
      ...new Set(
        [...winnerNumbers].filter((number) =>
          new Set(this.#numbers).has(number),
        ),
      ),
    ];

    return INTERSECTION_NUMBERS;
  }

  getExceptionNumberList(list_a, list_b) {
    const EXCEPTION_NUMBERS = [
      ...new Set([...list_a].filter((number) => !new Set(list_b).has(number))),
    ];

    return EXCEPTION_NUMBERS;
  }
}

module.exports = Lotto;
