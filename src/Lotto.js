const { GRADE, MESSAGE } = require('./constants/constants');

class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const checkOverlap = () => new Set(numbers).size === 6;
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.filter((number) => 1 <= number && number <= 45).length != 6) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자입니다.');
    }
    if (!checkOverlap()) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
  }

  result(playerNumber, bonusNumber) {
    let counter = 0;
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error(`${MESSAGE.ERROR} 보너스 번호와 당첨 번호가 중복됩니다.`);
    }
    for (const number of playerNumber) {
      if (this.#numbers.includes(number.toString())) counter += 1;
    }
    switch (counter) {
      case 3:
        return GRADE.FIFTH;
      case 4:
        return GRADE.FOURTH;
      case 5:
        if (playerNumber.includes(bonusNumber)) return GRADE.SECOND;
        return GRADE.THIRD;
      case 6:
        return GRADE.FIRST;
      default:
        return null;
    }
  }
}

module.exports = Lotto;
