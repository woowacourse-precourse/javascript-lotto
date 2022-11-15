const { PRIZE } = require('./Constants/number');
const { SECOND, THIRD, FIFTH, NONEPRIZE } = PRIZE;
const validate = require('./Utils/validate');

/**
 * @classdesc User가 소유한 로또
 */
class Lotto {
  #numbers;

  constructor(number) {
    validate.Length(number, 6);
    validate.Overlap(number);
    validate.ArrOnlyInputNum(number);
    this.#numbers = number;
  }

  /**
   * @description 로또 번호를 반환
   */
  getLotto() {
    return this.#numbers;
  }

  /**
   * @param {Six Number Array}winNums
   * @param {Number} bonusNum
   * @returns 3,4,5,5.5,6 순으로 1등부터 꼴등까지의 등수를 반터
   */
  isPrize(winNums, bonusNum) {
    let count = 0;
    winNums.forEach((num) => {
      this.#numbers.includes(num) ? count++ : count;
    });
    if (count === THIRD && this.#numbers.includes(bonusNum)) count = SECOND;
    return count >= FIFTH ? count : NONEPRIZE;
  }
}

module.exports = Lotto;
