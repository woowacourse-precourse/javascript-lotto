const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers, isWinning);
    this.#numbers = numbers;
  }

  // 유효한 값 검사
  validate(numbers, isWinning) {
    const numSet = new Set(numbers);

    if (isWinning) {
      if (numbers.length !== 7) {
        throw new Error("[ERROR] 당첨 번호는 총 7개여야 합니다.")
      }

      if (numSet.size !== 7) {
        throw new Error("[ERROR] 로또 번호가 중복됩니다.");
      }
    } else {
      if (numbers.length !== 6) {
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      }

      if (numSet.size !== 6) {
        throw new Error(`[ERROR] 로또 번호가 중복됩니다.`)
      }
    }
    
    numbers.forEach(num => {
      if (Number.isNaN(num)) {
        throw new Error(`[ERROR] 숫자가 아닌 값이 있습니다.`)
      }
    })
  }

  printLottoNumbers() {
    MissionUtils.Console.print(this.#numbers);
  }
}

module.exports = Lotto;
