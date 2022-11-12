const { Console, Random } = require("@woowacourse/mission-utils");
const Utils = require("./Utils");
const ValidateInput = require("./ValidateInput");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.utils = new Utils();
    this.validateInput = new ValidateInput();
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (typeof numbers !== 'undefined') {
      this.validateNumbersLength(numbers);
      this.isOverlapNumbers(numbers);
      this.isValidLottoNumber(numbers);
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

  isValidLottoNumber = (numbers) => {
    if ([...numbers].every(this.validateInput.isValidLottoNumber) === false) {
      this.utils.throwError("[ERROR] 로또 번호가 유효하지 않습니다. 1부터 45까지의 자연수를 입력해주세요.")
    }
  }
}

module.exports = Lotto;
