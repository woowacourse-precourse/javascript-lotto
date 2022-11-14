const MissionUtils = require("@woowacourse/mission-utils");
const CONSTANT = require("../assets/constant");
const Validate = require("../domain/Validate");
const Utils = require("../assets/Utils");

class Lotto {
  #numbers;

  constructor(test = null) {
    if (test) {
      Validate.lottoNumber(test);
      this.#numbers = test;
    } // 테스트케이스 통과용.

    if (!test) {
      const numbers = this.getRandomNumbers();
      Validate.lottoNumber(numbers);
      this.#numbers = numbers;
    }
  }

  get numbers() {
    return Utils.sort(this.#numbers); //오름차순 정렬
  }

  getRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      CONSTANT.LOTTO_START,
      CONSTANT.LOTTO_END,
      CONSTANT.LOTTO_LENGTH
    );
  }

  getResult(winNumber, bonus) {
    const winNumberArray = Utils.stringToArray(winNumber);

    const matchedList = this.#numbers.filter((number) => {
      return winNumberArray.includes(number);
    });

    return matchedList.length === 5
      ? this.isMatchedWithBonus(this.#numbers, bonus)
      : matchedList.length; //배열길이반환 =>정답갯수로 이용
  }

  isMatchedWithBonus(numbers, bonus) {
    return numbers.includes(+bonus) ? CONSTANT.BONUS_MATCH : numbers.length;
    //5개와 보너스가맞은 경우 -1을 리턴하여 보너스번호가 맞았음을 판단한다. 아닐경우 원래 길이 리턴.
  }
}

module.exports = Lotto;
