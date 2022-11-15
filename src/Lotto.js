const MissionUtils = require("@woowacourse/mission-utils");
const {LOTTO_NUMBERS, ERROR_MESSATE} = require("../constant/constants")

class Lotto {
  #numbers;

  constructor(numbers) {
    this.numberValue(numbers);
    this.numberRange(numbers)
    this.validate(numbers);
    this.notDuplicated(numbers)
    this.#numbers = numbers;
    this.lottoBonusNumber;
  }

  numberValue(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) throw new Error(ERROR_MESSATE.ISNAN);
    });
  }

  numberRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45)
        throw new Error(ERROR_MESSATE.RANGE);
    });
  }

  validate(numbers) {
    if (numbers.length !== LOTTO_NUMBERS.NUMBERS_SIZE) {
      throw new Error(ERROR_MESSATE.COUNT);
    }
  }

  notDuplicated(numbers) {
    if (numbers.length !== new Set(numbers).size)
      throw new Error(ERROR_MESSATE.DUPLICATED);
  }

  makeBonusNumber() {
    const randomNumber = Random.pickNumberInRange(1, 45);

    if (this.#numbers.includes(randomNumber)) {
      this.makeBonusNumber();
    }

    if (!this.#numbers.includes(randomNumber)) {
      this.lottoBonusNumber = randomNumber;
    }
  }

  notBonusDuplicated(lottoBonusNumber){
    if (this.#numbers.includes(lottoBonusNumber)) {
      throw new Error(ERROR_MESSATE.DUPLICATED);
    }
    return true;
  }
// TODO: 추가 기능 구현 
  printNumbers() {
    const sorted = this.#numbers.sort((a, b) => a - b).join(', ');
    Console.print(`[${sorted}]`);
  }
}
module.exports = Lotto;



