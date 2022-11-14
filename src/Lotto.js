const { LOTTO_MESSAGE, ERROR } = require("./constant/constant");
const { Console } = require("@woowacourse/mission-utils");
const Validation = require("./utils/Validation");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.getBonusNumber();
  }

  validate(numbers) {
    const splitNumbers = numbers.split(",");
    Validation.isNumber(splitNumbers.join(""));
    Validation.isLottoInput(splitNumbers);
    Validation.isOverlap(splitNumbers);
    splitNumbers.forEach((lottoNumber) => {
      Validation.isLottoVariable(Number(lottoNumber));
    });

    this.#numbers = splitNumbers;
  }

  validateBonusNumber(bonusNumber) {
    Validation.isNumber(bonusNumber);
    const toNumberBonusNumber = Number(bonusNumber);

    Validation.isLottoVariable(toNumberBonusNumber);
  }

  getBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.", (bonusNumber) => {
      this.validateBonusNumber(bonusNumber);
    });
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
