class Validation {
  checkType = (purchaseAmount) => {
    if (isNaN(purchaseAmount))
      throw new Error("[ERROR] 숫자를 입력해야합니다.");
  };

  checkNotZero = (purchaseAmount) => {
    if (purchaseAmount === "0")
      throw new Error("[ERROR] 0이 아닌 1,000단위로 금액을 입력해야합니다.");
  };

  checkEmpty = (purchaseAmount) => {
    if (purchaseAmount.length === 0)
      throw new Error(
        "[ERROR] 공백이 아닌 1,000원단위로 금액을 입력해야합니다."
      );
  };

  checkNotThousandUnit = (purchaseAmount) => {
    if (purchaseAmount % 1000 !== 0)
      throw new Error("[ERROR] 1,000원단위로 금액을 입력해야합니다.");
  };

  checkNegativeInput = (purchaseAmount) => {
    if (purchaseAmount < 0)
      throw new Error("[ERROR] 양수의 1,000원단위로 금액을 입력해야합니다.");
  };

  isValidMoney = (purchaseAmount) => {
    this.checkNotZero(purchaseAmount);
    this.checkType(purchaseAmount);
    this.checkEmpty(purchaseAmount);
    this.checkNegativeInput(purchaseAmount);
    this.checkNotThousandUnit(purchaseAmount);
    return true;
  };
}

module.exports = Validation;
