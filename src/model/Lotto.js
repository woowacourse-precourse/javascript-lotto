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
    return Utils.sort(this.#numbers);
  }

  set numbers(numbers) {
    this.#numbers = numbers;
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
    }); // 번호가 맞는경우 배열에 저장하여 배열길이를 정답 수로 이용한다
    const result = this.isMatchedWithBonus(matchedList, bonus);
    return result;
  }

  isMatchedWithBonus(list, bonus) {
    return list.includes(bonus) ? CONSTANT.BONUS_MATCH : list.length;
    //5개 맞은 경우 -1을 리턴하여 보너스번호가 맞았음을 판단한다. 아닐경우 원래 길이 리턴.
  }
}

module.exports = Lotto;
