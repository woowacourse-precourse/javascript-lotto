const { Console, Random } = require("@woowacourse/mission-utils");
const Utils = require("./Utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.utils = new Utils();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (typeof numbers !== 'undefined') {
      this.validateNumbersLength(numbers);
      this.isOverlapNumbers(numbers);
      this.validateEachLottoNumber(numbers);
    }
  }

  validateNumbersLength(numbers) {
    if (numbers.length !== 6) {
      this.utils.throwError("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  isOverlapNumbers(numbers) {
    if (new Set(numbers).size !== 6) {
      this.utils.throwError("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  validateEachLottoNumber = (numbers) => {
    if ([...numbers].every(this.utils.isValidLottoNumber) === false) {
      this.utils.throwError("[ERROR] 로또 번호가 유효하지 않습니다. 1부터 45까지의 자연수를 입력해주세요.")
    }
  }

  validateBonusNumber(winningNumbers, bonusNumber) {
    if (this.utils.isValidLottoNumber(bonusNumber) === false) {
      this.utils.throwError("[ERROR] 보너스 번호가 유효하지 않습니다. 1부터 45까지의 자연수를 입력해주세요.")
    }

    if (winningNumbers.includes(bonusNumber) === true) {
      this.utils.throwError("[ERROR] 당첨 번호에 보너스 번호가 포함됩니다. 당첨번호에 포함하지 않는 수를 입력해주세요.");
    };
  }
}

module.exports = Lotto;
