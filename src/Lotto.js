const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  lottoGame() { // 1부터 45까지의 숫자 중 6개를 고르고 오름차순으로 정렬하는 메서드
    const LOTTO_RESULT = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    LOTTO_RESULT.sort((a, b) => {
      return a - b;
    });
    return LOTTO_RESULT;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
