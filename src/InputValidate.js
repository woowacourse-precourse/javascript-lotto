const { LOTTERY_AMOUNT } = require("./constant");

class InputValidation {
  inputMoneyValidate(money) {
    if (Number.isNaN(money))
      throw new Error("[ERROR] 금액은 숫자만 입력 가능합니다.");
    if (money % 10 !== 0)
      throw new Error("[ERROR] 금액은 10원 단위로 입력 가능합니다.");
    if (money < 1000) {
      throw new Error(
        `[ERROR] ${LOTTERY_AMOUNT}원 이상부터 구매가 가능합니다.`
      );
    }
  }

  userNumberValidate(userNumber) {
    if (userNumber.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    userNumber.forEach((number) => {
      if (typeof number !== "number")
        throw new Error("[ERROR] 로또 번호는 숫자로만 구성해야 합니다.");
      if (number < 1 || number > 45)
        throw new Error("[ERROR] 로또 번호는 1~45 사이의 정수 입니다.");
    });
  }

  bonusNumberValidate(bonusNumber) {
    if (bonusNumber.length !== 1)
      throw new Error("[ERROR]보너스 번호는 하나만 입력해야 합니다.");
    const number = Number(bonusNumber);
    if (typeof number !== "number")
      throw new Error("[ERROR] 보너스 번호는 숫자만 입력 가능합니다.");
    if (number < 1 || number > 45)
      throw new Error("[ERROR] 보너스 번호는 1~45 사이의 정수 입니다.");
  }
}

module.exports = InputValidation;
