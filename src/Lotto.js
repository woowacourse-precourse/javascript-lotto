const { Console } = require("@woowacourse/mission-utils");
const { NUMBERS } = require("./Constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * 플레이어가 구매한 로또 갯수만큼 로또 번호를 생성합니다.
   * @param {number} lottoQuantity - 플레이어의 구매금액에 해당하는 로또 갯수
   * @returns {array} - 로또 번호가 담긴 배열(로또 번호 오름차순 정렬)
   */
  createLottoNumbers(lottoQuantity) {
    const lottoNumbersArray = [];
    for (let i = 0; i < lottoQuantity; i++) {
      const lottoNumbers = Console.Random.pickUniqueNumbersInRange(
        NUMBERS.FIRST,
        NUMBERS.LAST,
        NUMBERS.LOTTO
      );
      lottoNumbersArray.push(lottoNumbers.sort());
    }
    return lottoNumbersArray;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  // 로또 번호의 갯수가 6개 이상
}

module.exports = Lotto;
