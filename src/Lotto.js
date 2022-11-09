const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  // 유효한 값 검사
  validate(numbers) {
    const numSet = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numSet.size !== 6) {
      throw new Error("[Error] 로또 번호가 중복됩니다.")
    }
  }

  printLottoNumbers() {
    MissionUtils.Console.print(this.#numbers);
  }
}

module.exports = Lotto;
