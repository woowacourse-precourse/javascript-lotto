const { ERROR_MONEY } = require("./constants/messages");
const { RULE } = require("./constants/rule");

class Validation {
  checkType = (purchaseAmount) => {
    if (isNaN(purchaseAmount)) throw new Error(ERROR_MONEY.TYPE_NUMBER);
  };

  checkNotZero = (purchaseAmount) => {
    if (purchaseAmount === "0") throw new Error(ERROR_MONEY.ZERO);
  };

  checkEmpty = (purchaseAmount) => {
    if (purchaseAmount.length === 0) throw new Error(ERROR_MONEY.EMPTY);
  };

  checkNotThousandUnit = (purchaseAmount) => {
    if (purchaseAmount % 1000 !== 0)
      throw new Error(ERROR_MONEY.NOT_THOUSAND_UNIT);
  };

  checkNegativeInput = (purchaseAmount) => {
    if (purchaseAmount < 0) throw new Error(ERROR_MONEY.NEGATIVE_INPUT);
  };

  isValidMoney = (purchaseAmount) => {
    this.checkNotZero(purchaseAmount);
    this.checkType(purchaseAmount);
    this.checkEmpty(purchaseAmount);
    this.checkNegativeInput(purchaseAmount);
    this.checkNotThousandUnit(purchaseAmount);
    return true;
  };

  isNumberType = (numbers) => {
    return numbers.every((number) => !isNaN(number));
  };

  isLottoRange = (numbers) => {
    return numbers.every(
      (number) =>
        number >= RULE.MIN_LOTTO_NUMBER && number <= RULE.MAX_LOTTO_NUMBER
    );
  };

  checkLottoLength(numbers) {
    if (numbers.length !== RULE.LOTTO_NUMS)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }

  checkLottoType(numbers) {
    if (!this.isNumberType(numbers))
      throw new Error("[ERROR] 로또 번호는 숫자이어야 합니다.");
  }

  checkLottoRange(numbers) {
    if (!this.isLottoRange(numbers))
      throw new Error("[ERROR] 로또 번호의 범위는 1~45여야 합니다.");
  }

  checkDuplicatedNumber(numbers) {
    if ([...new Set(numbers)].length !== RULE.LOTTO_NUMS)
      throw new Error(
        "[ERROR] 로또 번호는 중복되지 않은 숫자로 이루어져야 합니다."
      );
  }

  isValidLottoNumber = (numbers) => {
    this.checkLottoLength(numbers);
    this.checkLottoType(numbers);
    this.checkLottoRange(numbers);
    this.checkDuplicatedNumber(numbers);
    return true;
  };

  checkBonusNumber(number, winNumbers) {
    if (number < RULE.MIN_LOTTO_NUMBER || number > RULE.MAX_LOTTO_NUMBER)
      throw new Error("[ERROR] 보너스 번호의 범위는 1~45여야 합니다.");

    if (isNaN(number))
      throw new Error("[ERROR] 보너스 번호는 숫자이어야 합니다.");

    if (winNumbers.includes(number))
      throw new Error("[ERROR] 보너스 번호가 당첨 번호에 포함되어 있습니다.");
    return true;
  }
}

module.exports = Validation;
