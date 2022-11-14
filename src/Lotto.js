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
    const intersectionNum = [
      ...new Set(
        [...winnerNumbers].filter((number) =>
          new Set(this.#numbers).has(number),
        ),
      ),
    ];

    if (intersectionNum.length === 5) {
      const lastNum = [...new Set([...intersectionNum], this.#numbers)][0];
      if (lastNum === bonusNumber) return 2;
      return 3;
    }

    if (intersectionNum.length === 6) return 1;

    return 6 - intersectionNum.length + 2;
  }
}

module.exports = Lotto;
