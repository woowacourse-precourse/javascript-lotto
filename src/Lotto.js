const { Print } = require("./lib/MissionUtils.js");

class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  checkCorrespond(winNum, bonus) {
    let correspondObj = { num: 0, bonus: 0 };
    this.#numbers.forEach((el) => {
      if (winNum.includes(el)) correspondObj.num += 1;
      if (el === bonus) correspondObj.bonus += 1;
    });
    return this.checkResult(correspondObj);
  }
  checkResult(correspondObj) {
    let result;
    switch (correspondObj.num) {
      case 6:
        result = 1;
        break;
      case 5:
        result = 3;
        break;
      case 4:
        result = 4;
        break;
      case 3:
        result = 5;
        break;
      default:
        result = 0;
    }
    if (result === 2 && correspondObj.bonus === 1) result = 2;
    return result;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
