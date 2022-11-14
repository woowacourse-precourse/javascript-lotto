const Constant = require("./utils/Constant");
class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    this.#numbers = this.validate(numbers);
    console.log(this.#numbers);
  }

  validate(numbers) {
    const numbersArr = numbers.split(",");
    console.log(numbersArr);
    if (numbersArr.length !== 6) {
      throw new Error(Constant.MESSAGE.ERROR.OUT_OF_RANGE);
    }
    return numbersArr;
  }

  setBonusNum(number) {
    //유효성 검사
    this.#bonusNumber = number;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
