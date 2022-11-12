// const { Random } = require("@woowacourse/mission-utils");
// const { NUMBERS } = require("./Constants");
const Validation = require("./Validation");

class Lotto {
  #numbers;

  constructor(numbers) {
    Validation.validateWinningNumbers(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }
  /**
   * 플레이어가 구매한 로또 갯수만큼 로또 번호를 생성합니다.
   * @param {number} loqttoQuantity - 플레이어의 구매금액에 해당하는 로또 갯수
   * @returns {array} - 로또 번호가 담긴 배열(로또 번호 오름차순 정렬)
   */
}

module.exports = Lotto;
