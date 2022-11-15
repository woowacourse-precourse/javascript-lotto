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

  notBonusDuplicated(bonusNumber){
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSATE.DUPLICATED);
    }
    return true;
  }
// TODO: 추가 기능 구현 

}
module.exports = Lotto;



