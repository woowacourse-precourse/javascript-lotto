const { Console, Random } = require('@woowacourse/mission-utils');

/**
 * @classdesc User가 소유한 로또
 */
class Lotto {
  #numbers;

  constructor() {
    this.genRndLotto();
  }

  /**
   * @param {Array} numbers
   * @description 로또 번호가 유효한지 검사
   */
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  /**
   * @description 랜덤한 로또 번호를 생성
   */
  genRndLotto() {
    this.#numbers = Random.pickUniqueNumbersInRange(1, 49, 6).sort(
      (a, b) => a - b
    );
  }

  /**
   * @description 로또 번호를 반환
   */
  get getLotto() {
    Console.print(this.#numbers);
    return this.#numbers;
  }

  /**
   * @param {Six Number Array}winning
   * @param {Number} bonusNum
   * @returns {Number} - 0, 1, 2, 3, 4, 5
   */
  isPrize(winning, bonusNum) {
    let winningNotMatch = this.#numbers.filter((num) => !winning.includes(num));

    if (winningNotMatch.length === 0) return 1;
    if (winningNotMatch.length === 1 && winningNotMatch[0] === bonusNum)
      return 2;
    if (winningNotMatch.length === 1 && winningNotMatch[0] !== bonusNum)
      return 3;
    if (winningNotMatch.length === 2) return 4;
    if (winningNotMatch.length === 3) return 5;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
